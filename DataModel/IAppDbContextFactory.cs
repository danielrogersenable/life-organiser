using Microsoft.EntityFrameworkCore.Storage;

namespace DataModel
{
    public interface IAppDbContextFactory
    {
        IAppDbContext Create(IDbContextTransaction transaction = null);
    }
}
