using AutoMapper;

using RegisterTestApp.Service.Db;
using RegisterTestApp.Service.Dto;

namespace RegisterTestApp.Service
{
    public class RegistrationService : IRegistrationService
    {
        private readonly IMapper _mapper;
        private readonly RegistrationAppContext _appContext;
        public RegistrationService(IMapper mapper, RegistrationAppContext context)
        {
            _appContext = context;
            _mapper = mapper;
        }

        public async Task<int> AddRequest(RegistrationModel model)
        {
            var data = _mapper.Map<RegistrationRequest>(model);

            await _appContext.AddAsync(data);
            await _appContext.SaveChangesAsync();
            return data.Id;
        }

        public async Task<RegistrationModel> GetById(int id)
        {
            return _mapper.Map<RegistrationModel>(await _appContext.RegistrationRequests.FindAsync(id));
        }
    }
}