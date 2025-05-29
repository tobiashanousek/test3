using System.ComponentModel.DataAnnotations;

namespace Odtahovky.Server.Models
{
    public class UsersDto
    {
        [Key]
        public Guid UserId { get; set; }
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }



    }
}
