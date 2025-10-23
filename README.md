# SAINF XXV - Landing Page

Landing page oficial da **Semana Acadêmica de Informática - XXV Edição**.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **DaisyUI** (componentes UI com tema escuro)
- **pnpm** (gerenciador de pacotes)

## 📦 Instalação

1. **Instalar dependências**:
```bash
pnpm install
```

2. **Rodar em desenvolvimento**:
```bash
pnpm dev
```

3. **Build para produção**:
```bash
pnpm build
```

4. **Preview da build**:
```bash
pnpm preview
```

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.tsx           # Navegação (desktop + mobile)
│   ├── Hero.tsx             # Seção principal com logo e título
│   ├── InscricaoSection.tsx # Link para Google Forms
│   ├── ParceirosSection.tsx # Grid de parceiros
│   └── Footer.tsx           # Rodapé
├── App.tsx                  # Componente principal
├── main.tsx                 # Entry point
└── index.css                # Estilos globais
```

## ✨ Características

### Design
- ✅ Tema escuro (DaisyUI dark theme)
- ✅ Design minimalista com espaçamento generoso
- ✅ Navbar sem logo à esquerda (clean)
- ✅ Menu mobile com modal/dialog
- ✅ Grid de parceiros (4 por linha no desktop)

### Acessibilidade
- ✅ ARIA labels e roles
- ✅ Suporte para leitores de tela
- ✅ Navegação por teclado
- ✅ Alt texts em imagens

### Responsividade
- ✅ Mobile-first approach
- ✅ Breakpoints: mobile, tablet, desktop
- ✅ Grid adaptável

## 📝 Personalização

### Adicionar Logo SAINF

Substitua o placeholder no componente `Hero.tsx`:

```tsx
// Linha ~19 de Hero.tsx
<img 
  src="/assets/logo-sainf.png" 
  alt="Logo SAINF XXV" 
  className="w-full h-full object-cover"
/>
```

Coloque a imagem em: `public/assets/logo-sainf.png` (300×300px)

### Link do Formulário de Inscrição

Edite o link no componente `InscricaoSection.tsx`:

```tsx
// Linha ~25 de InscricaoSection.tsx
href="https://forms.google.com/SEU_LINK_AQUI"
```

### Adicionar Logos de Parceiros

1. Adicione as imagens em `public/assets/parceiros/`
2. Edite o array no componente `ParceirosSection.tsx`:

```tsx
const parceiros = [
  { id: 1, nome: 'Parceiro 1', logo: '/assets/parceiros/logo1.png' },
  { id: 2, nome: 'Parceiro 2', logo: '/assets/parceiros/logo2.png' },
  // ...
];
```

## 🎯 Próximos Passos

- [ ] Adicionar logo SAINF XXV (300×300)
- [ ] Configurar link do Google Forms
- [ ] Adicionar logos dos parceiros
- [ ] Ajustar textos finais (substituir lorem ipsum)
- [ ] Adicionar links das redes sociais no footer
- [ ] Deploy (Vercel/Netlify)

## 📄 Licença

© 2025 SAINF XXV. Todos os direitos reservados.
