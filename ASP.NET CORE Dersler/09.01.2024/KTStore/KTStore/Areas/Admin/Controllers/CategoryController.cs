using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using KTStore.Data;
using KTStore.Models;
using KTStore.Areas.Admin.Services.Interfaces;
using KTStore.GenericModels;

namespace KTStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        private readonly ICategoryService categoryService;
        private readonly UploadImage uploadImage;
        public CategoryController(ICategoryService categoryService, UploadImage uploadImage)
        {
            this.categoryService = categoryService;
            this.uploadImage = uploadImage;
        }

        // GET: Admin/Category
        public async Task<IActionResult> Index()
        {
            var list=await categoryService.GetAllCategoryAsync();

            return View(list);
        }



        // GET: Admin/Category/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Admin/Category/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Category category)
        {
            if (ModelState.IsValid)
            {
                var files = HttpContext.Request.Form.Files;
                string image = uploadImage.Image(files, "category");
                category.Image = image==null?"empty.jpg":image;
               
                TempData["Message"] = await categoryService.AddCategoryAsync(category)?
                        "Category Added Successful":"";
            }
            
            return View();
        }

        // GET: Admin/Category/Edit/5
        public async Task<IActionResult> Edit(int id=0)
        {
            var category = await categoryService.GetCategoryByIdAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Admin/Category/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Category category)
        {
            if (ModelState.IsValid)
            {
                var files = HttpContext.Request.Form.Files;
                string image = uploadImage.Image(files, "category");
                if(image != null)
                {
                    category.Image = image;
                }
                var result = await categoryService.UpdateCategoryAsync(category);



                TempData["Message"] = result ?
                        "Category Edit Successful" : "";
            }
            return View(category);
        }

        // GET: Admin/Category/Delete/5
        public async Task<IActionResult> Delete(int id=0)
        {
            var result = await categoryService.DeleteCategoryAsync(id);

            TempData["Message"] = result ?
                    "Category Deleted Successful" : "Not Found Category";

            return RedirectToAction("Index");
        }

        //// POST: Admin/Category/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    if (_context.Category == null)
        //    {
        //        return Problem("Entity set 'ApplicationDbContext.Category'  is null.");
        //    }
        //    var category = await _context.Category.FindAsync(id);
        //    if (category != null)
        //    {
        //        _context.Category.Remove(category);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool CategoryExists(int id)
        //{
        //  return (_context.Category?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
