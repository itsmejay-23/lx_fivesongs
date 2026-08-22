const reminderDialog = document.createElement("dialog");
reminderDialog.className = "reminder-dialog";
reminderDialog.setAttribute("aria-labelledby", "reminder-title");
reminderDialog.innerHTML = `
  <div class="reminder-content">
    <h2 id="reminder-title">QUICK REMINDER</h2>
    <h3>📌 Post Retention</h3>
    <p>• Keep your video public and live on your profile for 6 months.<br />
      • Do not delete, archive, or make the post private during this period.</p>
    <h3>♻️ Content Repurpose Rights</h3>
    <p>• By joining this campaign, you allow the brand to reuse your content for 30 days.<br />
      • This may include reposting, editing, or using your video for promotional purposes.</p>
    <button class="reminder-confirm" type="button">I Understand</button>
  </div>
`;
document.body.append(reminderDialog);

let soundbiteUrl = "";
const confirmButton = reminderDialog.querySelector(".reminder-confirm");

document.querySelectorAll(".soundbite-link").forEach((soundbiteLink) => {
  soundbiteLink.addEventListener("click", (event) => {
    event.preventDefault();
    soundbiteUrl = soundbiteLink.href;
    reminderDialog.showModal();
  });
});

confirmButton.addEventListener("click", () => {
  reminderDialog.close();
  if (soundbiteUrl) {
    window.open(soundbiteUrl, "_blank", "noopener,noreferrer");
    soundbiteUrl = "";
  }
});

reminderDialog.addEventListener("click", (event) => {
  if (event.target === reminderDialog) {
    reminderDialog.close();
    soundbiteUrl = "";
  }
});
