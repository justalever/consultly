[![Let’s Build: With Ruby on Rails – Event Scheduling App with Payments](https://thepracticaldev.s3.amazonaws.com/i/bnpzc82278ro1w069hbz.jpg)](https://web-crunch.com/lets-build-ruby-on-rails-event-scheduling-app-payments/)

# Let’s Build: With Ruby on Rails – Event Scheduling App with Payments

originally authored on [web-crunch.com](https://web-crunch.com/lets-build-ruby-on-rails-event-scheduling-app-payments/)

Welcome to my next installment of the Let’s Build: With Ruby on Rails screencast series. After a bit of a hiatus, I’m back building apps with Ruby on Rails. My goal is to learn in the public as well as teach those interested in doing the same.

Much of the content you see out there about Ruby on Rails is quite dated so this series and more is an attempted to get things up to speed when it comes to new technologies, conventions, configurations, and more.

## About the build
In this seven-part series, I will build an app called **Consultly**. The app primarily deals with event scheduling but could be extended a great deal.

Any new user can sign up for free but will be charged if they are interested in scheduling a consultation session (with the admin of the app). All data pertaining to each new session will be relative to the currently logged in user. The primary focus is to provide an entrepreneurial consultant a platform to receive payments, communicate with clients, and book sessions without exchanging a lot of emails or phone calls.

I’ll add support for an admin user role to manage users, see upcoming sessions that have been booked, as well as manage the application.

#### Topics of discussion include:

- My [Kickoff Tailwind Rails application template](https://github.com/justalever/kickoff_tailwind)
- Using [foreman](https://github.com/ddollar/foreman) when developing locally
- Harnessing [webpack](https://github.com/rails/webpacker) to make use of [Tailwind CSS](https://tailwindcss.com/)
- Adding a [Mailer](https://guides.rubyonrails.org/action_mailer_basics.html) that sends to the current user once a session is booked.
- Integrating a payment system with [Stripe](https://stripe.com/) for each new session entry.
  - I’ll make use of the [Stripe gem](https://github.com/stripe/stripe-ruby) and [Stripe’s Elements drop in credit card form](https://stripe.com/payments/elements).
  
  
[Read more on my blog](https://web-crunch.com/lets-build-ruby-on-rails-event-scheduling-app-payments/) or [watch the first of seven videos on YouTube](https://youtu.be/l9zDmY9VrCw).
