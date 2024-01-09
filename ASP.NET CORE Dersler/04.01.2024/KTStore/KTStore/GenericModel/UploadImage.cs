using KTStore.Models;
using Microsoft.AspNetCore.Routing.Constraints;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Reflection.Metadata.Ecma335;

namespace KTStore.GenericModel
{
    public class UploadImage
    {

        private readonly IwebHostEnvironment he;

        public UploadImage(IWebHostEnvironment he)
        {
            this.he = he;
        }

      


    }
}
