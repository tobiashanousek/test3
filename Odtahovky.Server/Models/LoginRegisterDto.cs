namespace Odtahovky.Server.Models
{
    public class LoginRegisterDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
    }
}
