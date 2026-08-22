const reminderDialog = document.getElementById("reminder-dialog");
const confirmButton = reminderDialog?.querySelector(".reminder-confirm");
let soundbiteUrl = "";

document.querySelectorAll(".soundbite-link").forEach((soundbiteLink) => {
  soundbiteLink.addEventListener("click", (event) => {
    event.preventDefault();
    soundbiteUrl = soundbiteLink.href;
    reminderDialog.showModal();
  });
});

confirmButton?.addEventListener("click", () => {
  reminderDialog.close();
  if (soundbiteUrl) {
    window.open(soundbiteUrl, "_blank", "noopener,noreferrer");
    soundbiteUrl = "";
  }
});

reminderDialog?.addEventListener("click", (event) => {
  if (event.target === reminderDialog) {
    reminderDialog.close();
    soundbiteUrl = "";
  }
});
