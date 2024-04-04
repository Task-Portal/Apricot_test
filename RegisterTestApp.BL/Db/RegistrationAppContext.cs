using Microsoft.EntityFrameworkCore;

namespace RegisterTestApp.Service.Db
{
    public class RegistrationAppContext : DbContext
    {
        public DbSet<RegistrationRequest> RegistrationRequests { get; set; }

        public string DbPath { get; }

        public RegistrationAppContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = Path.Join(path, "database.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}
