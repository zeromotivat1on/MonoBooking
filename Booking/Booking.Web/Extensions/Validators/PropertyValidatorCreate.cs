using System;
using FluentValidation;
using Booking.Web.ViewModels.Property.Request;

namespace Booking.Web.Extensions.Validators
{
    public class PropertyValidatorCreate : AbstractValidator<RequestPropertyCreate>
    {
        private const string errorName = "({PropertyName}) length must be between 1 and 32.";
        private const string errorValue = "({PropertyName}) length must be between 1 and 2048.";
        private const string errorEnum = "({PropertyName}) is invalid value.";
        private const string errorNotEmpty = "({PropertyName}) should be specified.";
        private const string errorDate = "({PropertyName}) can't be later than current time.";

        public PropertyValidatorCreate()
        {
            RuleFor(property => property.Name)
                .Length(4, 2048).WithMessage(errorName);

            RuleFor(property => property.ValueType)
                .IsInEnum().WithMessage(errorEnum);

            RuleFor(property => property.Value)
                .Length(4, 32).WithMessage(errorValue);

            RuleFor(property => property.Status)
                .IsInEnum().WithMessage(errorEnum);

            RuleFor(property => property.CreationDate).NotEmpty().WithMessage(errorNotEmpty)
                .Must(CreationDate => CreationDate <= DateTime.Now).WithMessage(errorDate);
            
            RuleFor(property => property.LastModifiedDate).NotEmpty().WithMessage(errorNotEmpty);
        }
    }
}
