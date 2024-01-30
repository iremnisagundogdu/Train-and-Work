using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KTStore.Data.Migrations
{
    public partial class editcart2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShoppingCart_Product_ProductId",
                table: "ShoppingCart");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "ShoppingCart");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ShoppingCart",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_ShoppingCart_Product_ProductId",
                table: "ShoppingCart",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShoppingCart_Product_ProductId",
                table: "ShoppingCart");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ShoppingCart",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "ShoppingCart",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddForeignKey(
                name: "FK_ShoppingCart_Product_ProductId",
                table: "ShoppingCart",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
