using System;
using FluentValidation;
using Booking.Web.ViewModels.Record.Requests;
using Booking.Core.Enums;


namespace Booking.Web.Extensions.Validators
{
    public class RecordValidatorCreate : AbstractValidator<RecordRequestCreate>
    {
        private readonly static string isRequired = "is required.";
        public RecordValidatorCreate()
        {
            //NotNull() will take both true and false as valid properties.
            RuleFor(record => record.Deleted)
                .NotNull().WithMessage(isRequired);

            RuleFor(record => record.Status)
                .IsInEnum().WithMessage(isRequired);

            RuleFor(record => record.CreatedDate)
                .NotNull().WithMessage(isRequired);

            RuleFor(record => record.LastModifiedDate)
                .NotNull().WithMessage(isRequired);

            RuleFor(record => record.Date)
                .NotEmpty().WithMessage(isRequired)
                .Must(date => date >= DateTime.Now).WithMessage("must be more then now.");
        }
    }
}
