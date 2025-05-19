# Quick Start Guide - Aplikasi Alumni

## 🚀 Memulai

### Prasyarat
- Node.js (v16 atau lebih baru)
- npm atau yarn
- Expo CLI
- Android Studio (untuk development Android)
- Xcode (untuk development iOS, Mac only)

### Instalasi

1. Clone repository:
```bash
git clone [repository-url]
cd my-app
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Start development server:
```bash
npm start
# atau
yarn start
```

## 📱 Menjalankan Aplikasi

### Android
```bash
npm run android
# atau
yarn android
```

### iOS
```bash
npm run ios
# atau
yarn ios
```

## 📚 Dokumentasi

- [Dokumentasi Sistem](./system-documentation.md) - Dokumentasi lengkap sistem
- [Dokumentasi API](./docs-api.md) - Dokumentasi endpoint API

## 🔧 Scripts

- `npm start` - Start development server
- `npm run android` - Run di Android
- `npm run ios` - Run di iOS
- `npm run web` - Run di web browser
- `npm run lint` - Run linter

## 📁 Struktur Folder

```
my-app/
├── app/              # Expo Router files
├── src/              # Source code
│   ├── components/   # Reusable components
│   ├── screens/      # Screen components
│   ├── services/     # API services
│   └── types/        # TypeScript types
├── assets/           # Static assets
└── docs/            # Documentation
```

## 🛠 Development Tools

### Recommended VSCode Extensions
- ESLint
- Prettier
- React Native Tools
- TypeScript React code snippets

### Debug Tools
- React Native Debugger
- Expo Dev Tools
- React Developer Tools

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Catatan Penting

- Selalu gunakan TypeScript
- Ikuti style guide yang ada
- Tulis unit test untuk fitur baru
- Update dokumentasi jika diperlukan

## 🆘 Troubleshooting

### Common Issues

1. **Metro Bundler Error**
   ```bash
   npm start -- --reset-cache
   ```

2. **Android Build Error**
   - Pastikan Android SDK terinstall
   - Check `android/local.properties`

3. **iOS Build Error**
   - Run `pod install` di folder `ios`
   - Check Xcode configuration

## 📞 Support

Untuk bantuan dan pertanyaan, silakan:
1. Check dokumentasi
2. Buat issue di repository
3. Hubungi tim development 