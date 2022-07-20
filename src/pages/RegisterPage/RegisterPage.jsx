function RegisterPage() {
  return (
    <form>
      <label>
        Name
        <input type="name" name="name" value="name" />
      </label>

      <label>
        Email
        <input type="email" name="email" value="email" />
      </label>

      <label>
        Password
        <input type="password" name="password" value="password" />
      </label>

      <button type="submit">Sign in</button>
    </form>
  );
}

export default RegisterPage;
