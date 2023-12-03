namespace EFBasicExample.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class categoryEdit : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "Image", c => c.String());
            AddColumn("dbo.Products", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Image");
            DropColumn("dbo.Categories", "Image");
        }
    }
}
