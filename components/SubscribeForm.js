function SubscribeForm() {
  return (
    <div className="col-lg-4 col-md-6 footer-newsletter">
      <h4>Join Our Newsletter</h4>
      <p>Stay in tune with our latest projects.</p>
      <form action="" method="post">
        <input type="email" name="email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
}

export default SubscribeForm;
