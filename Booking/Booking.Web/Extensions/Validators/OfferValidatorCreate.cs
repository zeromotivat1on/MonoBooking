using System;
using FluentValidation;
using Booking.Web.ViewModels.Offer.Requests;

namespace Booking.Web.Extensions.Validators
{
    public class OfferValidatorCreate : AbstractValidator<OfferRequestCreate>
    {
        public OfferValidatorCreate()
        {
            RuleFor(offer => offer.Description)
                .Length(4, 2048).WithMessage("({PropertyName}) length must be between 4 and 2048.");

            RuleFor(offer => offer.Status)
                .IsInEnum().WithMessage("({PropertyName}) is invalid value.");

            RuleFor(offer => offer.Title)
                .Length(4, 32).WithMessage("({PropertyName}) length must be between 4 and 32.");

            RuleFor(offer => offer.SlotPrice)
                .ExclusiveBetween(0, 1000000).WithMessage("({PropertyName}) is invalid value.")
                .ScalePrecision(2, 8).WithMessage("({PropertyName}) is invalid value.");

            RuleFor(offer => offer.Image)
                .Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _))
                    .When(x => !string.IsNullOrEmpty(x.Image)).WithMessage("({PropertyName}) is invalid link.");

            RuleFor(offer => (decimal)offer.Mark)
                .Must(Mark => Mark >= 0 && Mark <= 10).WithMessage("({PropertyName}) is invalid value.")
                .ScalePrecision(2, 4).WithMessage("({PropertyName}) is invalid value.");

            RuleFor(offer => offer.SlotTime)
                .Must(SlotTime => SlotTime >= TimeSpan.MinValue && SlotTime <= new TimeSpan(23, 59, 59))
                .WithMessage("({PropertyName}) is invalid value.");
        }
    }
}
