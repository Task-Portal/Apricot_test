namespace RegisterTestApp.Service.Db
{
    public class RegistrationPhone
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public int RegistrationRequestId { get; set; }
        public RegistrationRequest RegistrationRequest { get; set; }
    }
}
