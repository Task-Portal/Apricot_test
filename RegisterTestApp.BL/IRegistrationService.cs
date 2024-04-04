using RegisterTestApp.Service.Dto;

namespace RegisterTestApp.Service
{
    public interface IRegistrationService
    {
        Task<int> AddRequest(RegistrationModel model);
        Task<RegistrationModel> GetById(int id);
    }
}