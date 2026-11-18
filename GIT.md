# Uso de Git en este proyecto
## 1. Instalación
sudo apt update
sudo apt install git
git --version
## 2. Configuración
git config --global user.name "..."
git config --global user.email "..."
git config --global --list
## 3. Conexión por SSH
ssh-keygen -t ed25519 -C "..."
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh -T git@github.com
## 4. Flujo de trabajo (Git Flow)
git switch develop
git pull
git switch -c feature/nombre
git add .
git commit -m "feat: ..."
git push -u origin feature/nombre
# PR a develop → CI en verde → merge
## 5. Protección de ramas
main y develop protegidas: PR obligatorio, sin bypass. Push directo
rechazado:
"protected branch hook declined".
## 6. Comandos de consulta
git status
git branch -a
git log --oneline --graph