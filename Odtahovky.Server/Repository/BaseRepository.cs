using Odtahovky.Server.Interfaces;
using Odtahovky.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
namespace Odtahovky.Server.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {

        protected readonly ApplicationDbContext _context;

        protected readonly DbSet<T> _dbSet;
        public BaseRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<IList<T>> GetAllData()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetDataById(int id)
        {
            return await _dbSet.FindAsync(id);
        }
        public async Task<T> AddData(T entity)
        {
            EntityEntry<T> entityEntry = _dbSet.Add(entity);
            await _context.SaveChangesAsync();
            return entityEntry.Entity;
        }
        

        public async Task<T> UpdateData(T entity)
        {
            EntityEntry<T> entityEntry = _dbSet.Update(entity);
            await _context.SaveChangesAsync();
            return entityEntry.Entity;
        }


        public async void DeleteData(int id)
        {
            T entity = _dbSet.Find(id);
            if(entity != null)
            {
                try
                {
                    _dbSet.Remove(entity);
                    await _context.SaveChangesAsync();
                }
                catch
                {
                    _context.Entry(entity).State = EntityState.Detached;
                    throw;
                }
                
            }
        }

    }
}
