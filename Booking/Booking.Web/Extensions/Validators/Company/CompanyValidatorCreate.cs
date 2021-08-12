using System;
using FluentValidation;
using Booking.Web.ViewModels.Company.Requests;
using Booking.Core.Enums;

namespace Booking.Web.Extensions.Validators
{
    public class CompanyValidatorCreate : AbstractValidator<CompanyRequestCreate>
    {
        private readonly DateTime currentTime = DateTime.Now;

        // I think, it would be better to create separate static class for validation limits, errors and error messages like these
        private readonly static int minDaysOnSite = 0;
        private readonly static int maxDaysOnSite = 100000;

        private readonly static int minCompanyStatus = 0;
        private readonly static int maxCompanyStatus = Enum.GetNames(typeof(CompanyStatus)).Length;

        private readonly static int minCompanyOrOwnerLength = 4;
        private readonly static int maxCompanyOrOwnerLength = 64;

        private readonly static int minDescriptionLength = 10;
        private readonly static int maxDescriptionLength = 200;

        // Empty
        private readonly static string emptyError = "(PropertyValue) is empty";
        private readonly static string emptyErrorMessage = "({PropertyName}) can't be (empty: null, empty string, whitespace or default (PropertyValue)";

        // Null
        private readonly static string nullError = "(PropertyValue) is null";
        private readonly static string nullErrorMessage = "({PropertyName}) can't be (null)";

        // Limit
        private readonly static string limitError = "(PropertyValue) exceeds limits";

        // String
        private readonly static string companyOrOwnerErrorMessage = "({PropertyName}) length must be " + $"[{minCompanyOrOwnerLength}, {maxCompanyOrOwnerLength}]";
        private readonly static string descriptionErrorMessage = "({PropertyName}) length must be " + $"[{minDescriptionLength}, {maxDescriptionLength}]";

        // Int
        private readonly static string daysOnSiteErrorMessage = "({PropertyName}) must be " + $"[{minDaysOnSite}, {maxDaysOnSite}]";

        // Enum
        private readonly static string companyStatusErrorMessage = "({PropertyName}) must be " + $"[{minCompanyStatus}, {maxCompanyStatus - 1}]";

        public CompanyValidatorCreate()
        {
            string dateLimitErrorMessage = "({PropertyName}) must be less than Current Time:" + $"({this.currentTime})";

            RuleFor(company => company.Name)
                .NotEmpty()
                    .WithErrorCode(emptyError)
                    .WithMessage(emptyErrorMessage)
                .Length(minCompanyOrOwnerLength, maxCompanyOrOwnerLength)
                    .WithErrorCode(limitError)
                    .WithMessage(companyOrOwnerErrorMessage);

            RuleFor(company => company.Description)
                .NotEmpty()
                    .WithErrorCode(emptyError)
                    .WithMessage(emptyErrorMessage)
                .Length(minDescriptionLength, maxDescriptionLength)
                    .WithErrorCode(limitError)
                    .WithMessage(descriptionErrorMessage);

            RuleFor(company => company.DaysOnSite)
                .NotNull()
                    .WithErrorCode(nullError)
                    .WithMessage(nullErrorMessage)
                .Must(DaysOnSite => DaysOnSite >= minDaysOnSite && DaysOnSite <= maxDaysOnSite)
                    .WithErrorCode(limitError)
                    .WithMessage(daysOnSiteErrorMessage);

            RuleFor(company => company.Owner)
                .NotEmpty()
                    .WithErrorCode(emptyError)
                    .WithMessage(emptyErrorMessage)
                .Length(minCompanyOrOwnerLength, maxCompanyOrOwnerLength)
                    .WithErrorCode(limitError)
                    .WithMessage(companyOrOwnerErrorMessage);

            RuleFor(company => company.Status)
                .NotNull()
                    .WithErrorCode(nullError)
                    .WithMessage(nullErrorMessage)
                .IsInEnum()
                    .WithErrorCode(limitError)
                    .WithMessage(companyStatusErrorMessage);

            RuleFor(company => company.FoundationDate)
                .NotNull()
                    .WithErrorCode(nullError)
                    .WithMessage(nullErrorMessage)
                .Must(FoundationDate => FoundationDate <= currentTime)
                    .WithErrorCode(limitError)
                    .WithMessage(dateLimitErrorMessage);

            RuleFor(company => company.Deleted)
                .NotNull()
                    .WithErrorCode(nullError)
                    .WithMessage(nullErrorMessage);

            RuleFor(company => company.LastModifiedDate)
                .NotNull()
                    .WithErrorCode(nullError)
                    .WithMessage(nullErrorMessage)
                .Must(LastModifiedDate => LastModifiedDate <= currentTime)
                    .WithErrorCode(limitError)
                    .WithMessage(dateLimitErrorMessage);
        }
    }
}
