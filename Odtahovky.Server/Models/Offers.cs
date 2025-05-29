using System.ComponentModel.DataAnnotations;

namespace Odtahovky.Server.Models
{
    public class Offers
    {
        [Key]
        public int OfferId { get; set; }
        public required string OfferName { get; set; }
        public required string OfferDescription { get; set; }
        public required string OfferPrice { get; set; }
        public required OfferType OfferType { get; set; }

        //cizí klíč
        public UsersDto Users { get; set; }
        public Guid UserId { get; set; }

    }

    public enum OfferType
    {
        Towing,
        Release,
        Move,
        Other
    }
}
