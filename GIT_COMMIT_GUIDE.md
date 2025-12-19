# Git Commit Guide - Incremental Commits to GitHub

## 🎯 Goal
Commit and push your project to GitHub in separate intervals, showing incremental development progress.

---

## 📋 Step-by-Step Setup

### Step 1: Initialize Git Repository

```bash
# Initialize git repository
git init

# Check status
git status
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"New repository"** (or the **+** icon)
3. Repository name: `app-graph-builder` (or your preferred name)
4. Description: "ReactFlow-based application for visualizing and managing cloud infrastructure"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 3: Add Remote Repository

```bash
# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/app-graph-builder.git

# Verify remote
git remote -v
```

---

## 🔄 Incremental Commit Strategy

### Strategy 1: Commit by Feature/Component (Recommended)

This shows logical development progress:

#### Commit 1: Project Setup
```bash
# Stage configuration files
git add package.json
git add tsconfig.json
git add vite.config.ts
git add tailwind.config.js
git add postcss.config.js
git add .eslintrc.cjs
git add .gitignore
git add index.html

# Commit
git commit -m "feat: initial project setup with Vite, React, TypeScript, and Tailwind"

# Push
git push -u origin main
```

#### Commit 2: UI Components
```bash
# Stage UI components
git add src/components/ui/
git add src/lib/utils.ts
git add src/index.css

# Commit
git commit -m "feat: add shadcn/ui components (button, input, slider, tabs, badge)"

# Push
git push
```

#### Commit 3: State Management
```bash
# Stage Zustand store
git add src/store/
git add src/types/

# Commit
git commit -m "feat: implement Zustand store for app state management"

# Push
git push
```

#### Commit 4: Mock API Setup
```bash
# Stage mock files
git add src/mocks/
git add src/hooks/

# Commit
git commit -m "feat: add MSW mock API handlers and TanStack Query hooks"

# Push
git push
```

#### Commit 5: Layout Components
```bash
# Stage layout components
git add src/components/layout/

# Commit
git commit -m "feat: implement layout components (TopBar, LeftRail, AppSelector, RightPanel)"

# Push
git push
```

#### Commit 6: ReactFlow Canvas
```bash
# Stage canvas component
git add src/components/canvas/
git add src/components/ErrorBoundary.tsx

# Commit
git commit -m "feat: implement ReactFlow canvas with node interactions (drag, select, delete)"

# Push
git push
```

#### Commit 7: Node Inspector
```bash
# Stage node inspector (if not already committed)
git add src/components/layout/NodeInspector.tsx

# Commit
git commit -m "feat: add node inspector with tabs, status pill, and synced controls"

# Push
git push
```

#### Commit 8: Resource Cards View
```bash
# Stage resource components
git add src/components/resources/

# Commit
git commit -m "feat: add resource cards view with configuration tabs and sliders"

# Push
git push
```

#### Commit 9: Main App Integration
```bash
# Stage main app files
git add src/App.tsx
git add src/main.tsx
git add src/vite-env.d.ts

# Commit
git commit -m "feat: integrate all components and implement view toggle functionality"

# Push
git push
```

#### Commit 10: Documentation
```bash
# Stage documentation
git add README.md
git add PROJECT_EXPLANATION.md
git add INTERVIEW_QUICK_REFERENCE.md
git add GIT_COMMIT_GUIDE.md

# Commit
git commit -m "docs: add comprehensive documentation and interview guides"

# Push
git push
```

---

## 🛠️ Alternative: Commit by Time Intervals

If you want to commit at different times (e.g., daily):

### Day 1: Initial Setup
```bash
git add package.json tsconfig.json vite.config.ts tailwind.config.js .gitignore index.html
git commit -m "chore: initial project setup"
git push -u origin main
```

### Day 2: Core Components
```bash
git add src/components/ui/ src/lib/ src/index.css
git commit -m "feat: add UI component library and utilities"
git push
```

### Day 3: State & Data Layer
```bash
git add src/store/ src/types/ src/hooks/ src/mocks/
git commit -m "feat: implement state management and data fetching layer"
git push
```

### Day 4: Layout & Navigation
```bash
git add src/components/layout/
git commit -m "feat: build layout components and navigation"
git push
```

### Day 5: Graph Visualization
```bash
git add src/components/canvas/ src/components/ErrorBoundary.tsx
git commit -m "feat: implement ReactFlow graph visualization"
git push
```

### Day 6: Resource Management
```bash
git add src/components/resources/
git commit -m "feat: add resource cards view for infrastructure management"
git push
```

### Day 7: Integration & Polish
```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: integrate all features and add view toggle"
git push
```

### Day 8: Documentation
```bash
git add *.md
git commit -m "docs: add project documentation and guides"
git push
```

---

## 📝 Commit Message Best Practices

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, styling
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Build process, dependencies

Examples:
```bash
git commit -m "feat: add ReactFlow canvas with node interactions"
git commit -m "fix: resolve hooks rules violation in NodeInspector"
git commit -m "docs: add project explanation for interview"
git commit -m "refactor: improve state synchronization between Zustand and ReactFlow"
```

---

## 🔍 Useful Git Commands

### Check what will be committed
```bash
git status
git diff                    # See changes in working directory
git diff --staged          # See changes staged for commit
```

### View commit history
```bash
git log --oneline          # Compact view
git log --graph --oneline  # With branch graph
```

### Undo changes (if needed)
```bash
git reset HEAD <file>      # Unstage a file
git checkout -- <file>     # Discard changes to a file
git reset --soft HEAD~1    # Undo last commit, keep changes staged
```

### Check remote connection
```bash
git remote -v              # Show remote URLs
git branch -a              # Show all branches
```

---

## 🚀 Quick Start Script

Create a file `commit.sh` (or `commit.bat` for Windows):

```bash
#!/bin/bash
# commit.sh - Quick commit script

echo "Select commit type:"
echo "1. Project Setup"
echo "2. UI Components"
echo "3. State Management"
echo "4. Mock API"
echo "5. Layout Components"
echo "6. ReactFlow Canvas"
echo "7. Node Inspector"
echo "8. Resource Cards"
echo "9. App Integration"
echo "10. Documentation"

read -p "Enter choice (1-10): " choice

case $choice in
  1)
    git add package.json tsconfig.json vite.config.ts tailwind.config.js .eslintrc.cjs .gitignore index.html
    git commit -m "feat: initial project setup"
    ;;
  2)
    git add src/components/ui/ src/lib/ src/index.css
    git commit -m "feat: add shadcn/ui components"
    ;;
  3)
    git add src/store/ src/types/
    git commit -m "feat: implement Zustand store"
    ;;
  # ... add more cases
esac

git push
```

---

## ⚠️ Important Notes

1. **Never commit `node_modules/`** - Already in .gitignore ✅
2. **Never commit `.env` files** - Add to .gitignore if you create them
3. **Commit meaningful changes** - Each commit should represent a logical unit of work
4. **Write clear commit messages** - Future you will thank you
5. **Push regularly** - Don't let commits pile up locally

---

## 🎯 Recommended Commit Order

For best presentation of development progress:

1. ✅ Project setup (config files)
2. ✅ UI components foundation
3. ✅ State management setup
4. ✅ Mock API and data layer
5. ✅ Layout structure
6. ✅ Graph visualization
7. ✅ Node inspector
8. ✅ Resource cards view
9. ✅ Integration and view toggle
10. ✅ Documentation

---

## 📊 Check Your Progress

After each commit, verify:

```bash
# See your commit history
git log --oneline --graph

# See what's changed
git status

# See remote status
git remote show origin
```

---

## 🆘 Troubleshooting

### If you get "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/app-graph-builder.git
```

### If push is rejected
```bash
# Pull first, then push
git pull origin main --rebase
git push
```

### If you want to rename your branch
```bash
git branch -M main
git push -u origin main
```

---

## ✅ Final Checklist

Before pushing to GitHub:

- [ ] All sensitive data removed
- [ ] `.gitignore` is complete
- [ ] `README.md` is updated
- [ ] No large files committed
- [ ] Commit messages are clear
- [ ] Remote repository is set up
- [ ] You're on the correct branch (main/master)

---

**Happy committing! 🚀**


