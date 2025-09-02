# Aplicativo Móvel - Cadastro de Usuários e Veículos

Um aplicativo móvel moderno para cadastro de usuários e veículos com validações específicas do Brasil (CPF, placa, RENAVAM).

## 🚀 Funcionalidades

- **Login seguro** com interface moderna
- **Cadastro de usuários** com validação de CPF e telefone brasileiro
- **Cadastro de veículos** com validação de placa (formato antigo e Mercosul) e RENAVAM
- **Design responsivo** inspirado em apps brasileiros como Nubank
- **Validações em tempo real** para todos os campos
- **Interface nativa** usando Capacitor

## 📱 Tecnologias

- **React + TypeScript** - Interface moderna e tipada
- **Tailwind CSS** - Design system customizado
- **Capacitor** - Build nativo para iOS e Android
- **Shadcn/UI** - Componentes acessíveis e personalizáveis

## 🛠️ Como usar no dispositivo móvel

### 1. Preparar o projeto
```bash
# Clonar e instalar dependências
git clone <seu-repositorio>
cd <nome-do-projeto>
npm install
```

### 2. Adicionar plataformas móveis
```bash
# Para Android
npx cap add android

# Para iOS (apenas no Mac)
npx cap add ios
```

### 3. Build e sincronização
```bash
# Build do projeto
npm run build

# Sincronizar com plataformas nativas
npx cap sync
```

### 4. Executar no dispositivo
```bash
# Para Android
npx cap run android

# Para iOS (Mac + Xcode necessário)
npx cap run ios
```

## 📋 Validações Implementadas

### CPF
- Formato: 000.000.000-00
- Validação completa dos dígitos verificadores
- Rejeita sequências inválidas (111.111.111-11, etc.)

### Telefone Celular
- Formato: (11) 99999-9999
- Valida DDD brasileiro
- Apenas números de celular (9 dígitos)

### Placa de Veículo
- **Formato antigo**: ABC-1234
- **Formato Mercosul**: ABC1D23
- Conversão automática para maiúsculas

### RENAVAM
- Formato: 1234.567.8901
- Validação completa do dígito verificador
- 11 dígitos obrigatórios

## 🎨 Design System

O app usa um design system inspirado em aplicativos brasileiros modernos:

- **Cores primárias**: Azul (#1E40AF) e Verde (#059669)
- **Gradientes suaves** para elementos de destaque
- **Animações fluidas** com cubic-bezier
- **Sombras elegantes** com transparências
- **Typography** otimizada para mobile

## 📖 Para mais informações sobre mobile

Leia nosso blog post completo sobre desenvolvimento móvel: https://lovable.dev/blogs/TODO
