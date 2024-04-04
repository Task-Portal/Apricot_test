using Microsoft.AspNetCore.Mvc;

using RegisterTestApp.Service;
using RegisterTestApp.Service.Dto;

namespace RegisterTestApp.UI.Controllers;

[ApiController]
[Route("[controller]")]
public class RegisterController : ControllerBase
{
    private readonly IRegistrationService _registrationService;

    public RegisterController(IRegistrationService registrationService)
    {
        _registrationService = registrationService;
    }

    [HttpPost]
    public async Task<RegistrationModel> Post(RegistrationModel model)
    {
        var id = await _registrationService.AddRequest(model);
        return await _registrationService.GetById(id);
    }
}
