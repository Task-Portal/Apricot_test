namespace RegisterTestApp.Service.Db
{
    public class RegistrationRequest
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public List<RegistrationPhone> RegistrationPhones { get; set; }
    }
}
