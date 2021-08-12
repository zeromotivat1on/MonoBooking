using System;
using FluentValidation;
using Booking.Web.ViewModels.Category.Requests;

namespace Booking.Web.Extensions.Validators
{
    public class CategoryValidatorCreate : AbstractValidator<CategoryRequestCreate>
    {
        public CategoryValidatorCreate() 
        {
            RuleFor(category => category.Title).Length(3, 32).WithMessage("({PropertyName}) length must be between 3 and 32.");
            RuleFor(category => category.Description).NotEmpty().WithMessage("({PropertyName}) should be specified.")
                .Length(4, 2048).WithMessage("({PropertyName}) length must be between 4 and 2048.");
            RuleFor(category => category.CreatedAt).NotEmpty().WithMessage("({PropertyName}) should be specified.")
                .Must(CreatedAt => CreatedAt <= DateTime.Now).WithMessage("({PropertyName}) can't be later than current time.");
            RuleFor(category => category.IsDeleted).NotNull().WithMessage("({PropertyName}) should be specified.");
        }
    }
}