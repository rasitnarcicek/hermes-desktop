export default {
  title: "Yapılandırma Sağlığı",
  description:
    "Masaüstü yapılandırmasının denetimi (ortam değişkenleri, config.yaml, modeller). Sohbetin başarısız olmasına neden olan tutarsızlıkları bulur ve güvenli olduğunda tek tıkla düzeltme sunar.",
  rerun: "Denetimi yeniden çalıştır",
  allGood: "Sorun bulunamadı. Yapılandırmanız tutarlı görünüyor.",
  banner: {
    lead: "Yapılandırma sorunları tespit edildi:",
    errors: "{{count}} hata",
    warnings: "{{count}} uyarı",
    infos: "{{count}} not",
    showDetails: "Ayrıntıları göster",
  },
  apiKeyBanner: {
    lead: "API Sunucu Anahtarı ayarlanmadı; sohbet başarısız olacak.",
    setNow: "ŞİMDİ AYARLA",
  },
  apiKeyModal: {
    title: "API Sunucu Anahtarını Ayarla",
    description:
      "API_SERVER_KEY is required for the Hermes gateway to authenticate requests. Set it now to enable chat.",
    label: "API Sunucu Anahtarı",
    placeholder: "sk-… veya herhangi bir gizli anahtar",
    autoGenerate: "Otomatik oluştur",
    hint: "Kendi anahtarınızı yapıştırabilir veya rastgele bir UUID oluşturabilirsiniz.",
  },
  fix: {
    apply: "Düzeltmeyi uygula",
    running: "Uygulanıyor…",
    success: "Düzeltme uygulandı.",
    failure: "Düzeltme başarısız.",
  },
} as const;
