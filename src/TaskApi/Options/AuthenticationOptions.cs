namespace TaskApi.Options
{
    public class AuthenticationOptions
    {
        public int TokenExpiryInSeconds { get; set; }

        public string TokenSigningSecret { get; set; }
    }
}
