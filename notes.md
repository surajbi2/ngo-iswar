To collaborate on the same project using GitHub, both persons need to follow these steps:

### **1. Setup:**
- One person (let’s say **Person A**) creates a GitHub repository.
- **Person A** then invites **Person B** as a collaborator:
  - Go to **GitHub Repository → Settings → Collaborators**.
  - Add **Person B** using their GitHub username or email.
  - **Person B** accepts the invitation.

### **2. Cloning the Repository (for Person B)**
- **Person B** clones the repository using:
  ```bash
  git clone https://github.com/username/repository.git
  ```
  *(Replace `username/repository.git` with the actual GitHub repo URL.)*

### **3. Working on Different Features (Branching)**
- Each person should work on separate **branches** to avoid conflicts.
- To create a new branch:
  ```bash
  git checkout -b feature-branch
  ```
- After making changes, commit them:
  ```bash
  git add .
  git commit -m "Added new feature"
  ```

### **4. Pushing Changes**
- Push the branch to GitHub:
  ```bash
  git push origin feature-branch
  ```
- Open a **Pull Request (PR)** in GitHub and request a review from the other person.

### **5. Pulling Latest Changes**
Before making new changes, both persons should pull the latest updates from the `main` branch to stay in sync:
```bash
git checkout main
git pull origin main
```
If working on a feature branch, also update it:
```bash
git checkout feature-branch
git merge main
```

### **6. Merging Changes**
Once the **Pull Request** is approved:
- **Person A** (or the repo owner) merges it into `main`.
- After merging, both persons should pull the latest `main` branch:
  ```bash
  git checkout main
  git pull origin main
  ```

### **7. Handling Merge Conflicts (if any)**
- If both edit the same file, conflicts may occur.
- Git will show conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
- Manually edit the file to resolve conflicts, then:
  ```bash
  git add .
  git commit -m "Resolved conflicts"
  ```

### **8. Keeping Everything Up to Date**
Regularly pull the latest changes to avoid conflicts:
```bash
git pull origin main
```

Let me know if you need a more detailed explanation of any step! 🚀