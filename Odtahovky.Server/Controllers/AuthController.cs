using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Odtahovky.Server.Models;

namespace Odtahovky.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public AuthController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        private async Task<UsersDto> ConvertToUserDto(IdentityUser user)
        {
            var userDto = new UsersDto
            {
                UserId = new Guid(user.Id),
                UserName = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber
            };
            return userDto;


        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(LoginRegisterDto loginRegisterDto)
        {
            var user = new IdentityUser
            {
                UserName = loginRegisterDto.UserName,
                Email = loginRegisterDto.Email,
                PhoneNumber = loginRegisterDto.PhoneNumber
            };

            var result = await _userManager.CreateAsync(user, loginRegisterDto.Password);

            if (result.Succeeded)
            {
                IdentityUser newUser = await _userManager.FindByEmailAsync(loginRegisterDto.Email) ?? throw new Exception("Uživatel nebyl nalezen");
                UsersDto userDto = await ConvertToUserDto(newUser);
                return Ok(userDto);
            }

            return BadRequest(result.Errors);

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRegisterDto loginRegisterDto)
        {
            var logUser = await _userManager.FindByEmailAsync(loginRegisterDto.Email);
            if (logUser == null)
            {
                return BadRequest("Uživatel nebyl nalezen");
            }
             
            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.CheckPasswordSignInAsync(logUser, loginRegisterDto.Password, false);
            if (result.Succeeded)
            {
                UsersDto userDto = await ConvertToUserDto(logUser);
                return Ok(userDto);
            }

            return BadRequest("Nesprávné heslo nebo email");
        }
    }
}
