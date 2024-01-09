using KTStore.Data.Migrations;
using KTStore.Models;

namespace KTStore.Areas.Admin.Services.Interfaces
{
    public interface IUserService
    {
        public Task<bool> AddUserAsync(ApplicationUser user);
        public Task<List<ApplicationUser>> GetAllUserAsync();
        public Task<ApplicationUser> GetUserByIdAsync(int id);
        public Task<bool> UpdateUserAsync(ApplicationUser user);
        public Task<bool> DeleteUserAsync(int id);
    }
}
