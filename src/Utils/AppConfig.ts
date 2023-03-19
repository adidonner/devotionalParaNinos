class AppConfig {
    public loginUrl = "http://localhost:8080/auth/login/";
}

const appConfig = new AppConfig; // Singleton

export default appConfig;
