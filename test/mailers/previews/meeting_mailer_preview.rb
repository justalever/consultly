# Preview all emails at http://localhost:3000/rails/mailers/meeting_mailer
class MeetingMailerPreview < ActionMailer::Preview

  def meeting_scheduled
    MeetingMailer.with(meeting: Meeting.last, user: User.last).meeting_scheduled
  end
end
