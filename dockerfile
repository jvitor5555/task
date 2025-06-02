# Etapa 1: Escolher uma imagem base oficial do Node
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia todo o restante do projeto para dentro do container
COPY . .

# Expõe a porta que a aplicação roda (altere se for diferente)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
