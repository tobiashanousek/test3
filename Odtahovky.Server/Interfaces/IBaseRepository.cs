namespace Odtahovky.Server.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        Task <IList<T>> GetAllData();
        Task<T> GetDataById(int id);
        Task<T> AddData(T entity);
        Task<T> UpdateData(T entity);
        void DeleteData(int id);
    }
}
