import type { TranslationMap } from './types';

export const tr: TranslationMap = {
  brand: 'TürkSes',
  brandTag: 'SİNYAL / KANIT',
  nav: [
    { label: 'Proje', href: '/proje' },
    { label: 'Yaklaşım', href: '/yaklasim' },
    { label: 'Veri ve Etik', href: '/veri-etik' },
    { label: 'Yol Haritası', href: '/yol-haritasi' },
    { label: 'Açık Bilim', href: '/acik-bilim' },
    { label: 'İletişim', href: '/iletisim' },
  ],
  localeLabel: 'Dil',
  heroKicker: 'Açık bilim · konuşma sinyali araştırması · erken risk çalışmaları',
  heroTitleLines: ['Türkçe Seslerden', 'Bilişsel Sağlığa Yeni Bir Bakış'],
  heroLead:
    'TürkSes; Türkçe konuşma, ses ve vokal sinyallerini yapay zekâ ile analiz ederek Alzheimer ve diğer bilişsel bozuklukların erken risk değerlendirmesine destek olmayı amaçlayan açık kaynaklı bir araştırma platformudur.',
  heroSecondary:
    'TürkSes bir tıbbi tanı sistemi değildir. Yapay zekâ çıktıları klinik kararın yerine geçmez; risk değerlendirmesi ve sağlık profesyoneline yönlendirme desteği amacıyla geliştirilmektedir.',
  ctas: {
    primary: { label: 'Projeyi Keşfet', href: '/proje' },
    secondary: { label: 'Nasıl Çalışıyor?', href: '/yaklasim' },
  },
  visual: {
    title: 'VoiceField',
    subtitle: 'Akustik · zamansal · dilsel iz',
    annotations: ['Akustik', 'Zamansal', 'Dilsel'],
  },
  trust: [
    'Akademik araştırma öncelikli',
    'Türkçe veri temsiline odaklı',
    'Tıbbi tanı sistemi değildir',
    'Sağlık profesyoneline yönlendirme odaklı',
  ],
  sections: {
    about: {
      id: 'proje',
      kicker: 'Proje Hakkında',
      title: 'TürkSes Nedir?',
      lead:
        'TürkSes, Türkçeye özgü dilsel ve akustik örüntüleri araştırmaya açan; bilişsel sağlık çalışmaları için bilimsel veri, güvenli altyapı ve yapay zekâ destekli inceleme araçları üretmeyi hedefleyen bir araştırma girişimidir.',
      needsTitle: 'Neden TürkSes?',
      needs: [
        'Bilişsel bozuklukların erken fark edilmesi, araştırma ve yönlendirme süreçlerinde kritik bir ihtiyaç olarak öne çıkmaktadır.',
        'Türkçe konuşma verileri küresel araştırmalarda yetersiz temsil edildiği için mevcut modeller yerel bağlamı eksik yakalayabilmektedir.',
        'Türkçeye özgü ses, ritim, vurgu ve sözdizimsel yapıların ayrı bir araştırma çerçevesi içinde incelenmesi gerekmektedir.',
      ],
      objectivesTitle: 'Araştırma hedefleri',
      objectives: [
        {
          title: 'Türkçe odaklı veri altyapısı',
          body: 'Türkçe konuşma ve vokal sinyallerini güvenli biçimde toplayan, anonimleştiren ve araştırmaya hazırlayan sürdürülebilir bir veri omurgası kurmak.',
        },
        {
          title: 'Çok modlu inceleme',
          body: 'Konuşma içeriği, akustik özellikler ve yardımcı vokal sinyalleri aynı araştırma akışında ele alarak daha kapsamlı örüntü incelemeleri yapmak.',
        },
        {
          title: 'Sorumlu araştırma çıktıları',
          body: 'Açık kaynak araçlar, model kartları, veri kartları ve yayınlarla bilimsel topluluğa tekrar kullanılabilir, şeffaf çıktılar sağlamak.',
        },
      ],
    },
    approach: {
      id: 'yaklasim',
      kicker: 'Yaklaşımımız',
      title: 'Araştırma Yaklaşımımız',
      lead:
        'TürkSes, konuşma içeriği ile sesin fiziksel özelliklerini aynı çerçevede ele alır. Amaç tanı üretmek değil; araştırma içgörüsü ve erken risk değerlendirme desteği üretebilecek güvenilir bilimsel örüntüler toplamaktır.',
      flow: [
        'SES',
        'SES / METİN',
        'DİLBİLİMSEL + AKUSTİK ÖZELLİKLER',
        'YAPAY ZEKÂ MODELLERİ',
        'ARAŞTIRMA İÇGÖRÜSÜ',
      ],
      researchAreasTitle: 'Dört araştırma alanı',
      researchAreas: [
        {
          title: 'Türkçeye odaklı',
          body: 'Türkçenin sözdizimi, morfolojisi ve konuşma ritmine özgü özellikler ayrı bir araştırma ekseni olarak ele alınır.',
        },
        {
          title: 'Çok modlu analiz',
          body: 'Dilsel içerik, akustik ses özellikleri ve yardımcı vokal sinyaller aynı inceleme hattında birleştirilir.',
        },
        {
          title: 'Sorumlu yapay zekâ',
          body: 'Model çıktılarının açıklanabilirliği, adilliği ve araştırma amaçlı sınırları baştan tanımlanır.',
        },
        {
          title: 'Açık bilim',
          body: 'Kod, dokümantasyon, veri kartları ve yayınlar kişisel verileri açığa çıkarmadan paylaşılabilir araştırma çıktıları olarak planlanır.',
        },
      ],
      processTitle: 'Nasıl çalışıyor?',
      process: [
        {
          index: '01',
          title: 'Bilgilendirme ve onay',
          body: 'Katılımcı süreci, araştırma kapsamı ve veri kullanımı açık şekilde anlatılır; uygun onay mekanizmaları uygulanır.',
        },
        {
          index: '02',
          title: 'Ses ve konuşma verilerinin toplanması',
          body: 'Araştırma protokolüne uygun ses, konuşma ve ilgili vokal sinyaller yapılandırılmış biçimde elde edilir.',
        },
        {
          index: '03',
          title: 'Anonimleştirme ve güvenli saklama',
          body: 'Toplanan veriler tanımlayıcı unsurlardan ayrıştırılır, güvenli erişim kurallarıyla saklanır.',
        },
        {
          index: '04',
          title: 'Dilsel ve akustik analiz',
          body: 'Speech-to-text, dilsel özellik çıkarımı ve akustik sinyal incelemeleri ortak bir araştırma hattında yürütülür.',
        },
        {
          index: '05',
          title: 'Yapay zekâ modellemesi',
          body: 'Araştırma modelleri örüntü, ilişki ve risk sinyallerini incelemek için kontrollü veri akışları üzerinde geliştirilir.',
        },
        {
          index: '06',
          title: 'Risk değerlendirme desteği',
          body: 'Üretilen çıktılar klinik karar yerine geçmez; yalnızca araştırma ve sağlık profesyoneline yönlendirme desteği amacı taşır.',
        },
      ],
    },
    technology: {
      id: 'arastirma-teknoloji',
      kicker: 'Araştırma ve teknoloji',
      title: 'Çekirdek teknoloji alanları',
      lead:
        'Teknoloji yığını, gösterişli görseller yerine ölçülebilir araştırma işlevleri etrafında şekillenir. Her katman veri güvenliği, tekrar üretilebilirlik ve araştırma kullanımı için tasarlanır.',
      areas: [
        {
          title: 'Konuşma ve dil analizi',
          body: 'Konuşma içeriğinden sözcük seçimi, akıcılık, duraksama ve anlatı örgüsü gibi dilsel özellikleri türetir.',
        },
        {
          title: 'Akustik ses analizi',
          body: 'Ton, enerji, ritim, süre, varyasyon ve ses kalitesi gibi sinyal özelliklerini ölçer ve karşılaştırır.',
        },
        {
          title: 'Öksürük ve vokal sinyaller',
          body: 'Konuşma dışı ses örüntülerini ayrı bir araştırma katmanı olarak ele alır; çok modlu modellemeyi güçlendirir.',
        },
        {
          title: 'Yapay zekâ modelleri',
          body: 'Özellik temsilleri ile araştırma odaklı sınıflandırma, sıralama ve örüntü bulma yaklaşımlarını kontrollü biçimde bir araya getirir.',
        },
        {
          title: 'Güvenli teknoloji altyapısı',
          body: 'Rol tabanlı erişim, saklama politikaları ve araştırma logları ile veri ve model yaşam döngüsünü güvenli biçimde yönetir.',
        },
      ],
    },
    ethics: {
      id: 'veri-etik',
      kicker: 'Veri ve Etik',
      title: 'Veri, Etik ve Güven',
      lead:
        'TürkSes veri toplama ve modelleme faaliyetlerini yalnızca teknik başarı olarak değil, araştırma yönetişimi meselesi olarak ele alır. Katılımcı hakları, güvenlik, adalet ve açıklanabilirlik aynı çerçevede değerlendirilir.',
      pillars: [
        {
          title: 'Bilgilendirilmiş katılımcı onayı',
          body: 'Katılımcılara veri işleme amacı, saklama süresi, erişim kapsamı ve hakları açık biçimde sunulur.',
        },
        {
          title: 'Gerekli verilerin toplanması',
          body: 'Araştırma hedefiyle doğrudan ilişkili olmayan veri kategorileri toplanmaz; veri minimizasyonu uygulanır.',
        },
        {
          title: 'Anonimleştirme ve pseudonymization',
          body: 'Kimlik belirleyici alanlar araştırma verisinden ayrıştırılır; yeniden tanımlama riski kontrollü şekilde azaltılır.',
        },
        {
          title: 'Rol tabanlı erişim ve güvenli saklama',
          body: 'Veriye erişim rol, görev ve kayıt altına alınmış izin kuralları üzerinden tanımlanır; güvenli saklama esas alınır.',
        },
        {
          title: 'Saklama, imha ve etik kurul',
          body: 'Veri yaşam döngüsü saklama ve imha kurallarıyla yönetilir; etik kurul yükümlülükleri süreç boyunca izlenir.',
        },
        {
          title: 'Yapay zekâ adaleti ve sorumlu açıklama',
          body: 'Model performansı farklı örneklemler üzerinde değerlendirilir; sınırlılıklar ve riskler açık biçimde raporlanır.',
        },
      ],
    },
    roadmap: {
      id: 'yol-haritasi',
      kicker: 'Yol haritası ve çıktılar',
      title: '2026–2028 Yol Haritası',
      lead:
        'Yol haritası, veri altyapısından modelleme araçlarına ve açık bilim çıktılarından uygulama yüzeylerine uzanan kademeli bir araştırma planı olarak ele alınır.',
      years: [
        {
          year: '2026',
          milestones: [
            'Araştırma çerçevesinin, veri protokollerinin ve etik süreçlerin netleştirilmesi',
            'Türkçe konuşma ve vokal sinyalleri için ilk veri toplama akışlarının hazırlanması',
            'Güvenli saklama ve anonimleştirme altyapısının temelinin kurulması',
          ],
        },
        {
          year: '2027',
          milestones: [
            'Dilsel ve akustik özellik çıkarımı araçlarının olgunlaştırılması',
            'Çok modlu yapay zekâ modelleme deneylerinin genişletilmesi',
            'Araştırma raporları, veri kartları ve model kartları için yayın hazırlıklarının yapılması',
          ],
        },
        {
          year: '2028',
          milestones: [
            'Açık kaynak araştırma platformu ve uygulama yüzeylerinin genişletilmesi',
            'Bilimsel yayın, etkinlik ve paydaş paylaşım çıktılarının artırılması',
            'Araştırma iş birlikleri ve sürdürülebilir açık bilim çerçevesinin güçlendirilmesi',
          ],
        },
      ],
      outputsTitle: 'Planlanan çıktılar',
      outputs: [
        {
          title: 'Türkçeye özgü veri setleri',
          body: 'Türkçeye özgü multimodal araştırma veri setleri ve bunları açıklayan veri kartları.',
        },
        {
          title: 'Feature extraction araçları',
          body: 'Dilsel ve akustik özellik çıkarımı için tekrar kullanılabilir açık kaynak araçlar.',
        },
        {
          title: 'Araştırma modelleri',
          body: 'Alzheimer risk değerlendirme modelleri ile öksürük ve vokal sinyal temelli araştırma modelleri.',
        },
        {
          title: 'Uygulama yüzeyleri',
          body: 'Web ve mobil uygulamalarla araştırma kullanımını destekleyen kontrollü arayüzler.',
        },
        {
          title: 'Bilimsel çıktı paketi',
          body: 'Bilimsel yayınlar, araştırma raporları, model kartları, etkinlikler ve teknik dokümantasyon.',
        },
      ],
    },
    consortium: {
      id: 'konsorsiyum',
      kicker: 'Konsorsiyum ve ekip',
      title: 'Kurumsal ortaklıklar ve çalışma grupları',
      lead:
        'TürkSes, araştırma, yazılım, yapay zekâ, etik ve yaygınlaştırma alanlarını aynı çatı altında buluşturan bir konsorsiyum yaklaşımıyla ilerler.',
      organizations: [
        {
          title: 'Yapay Zekâ Ekosistemi Derneği – YZED',
          body: 'Ekosistem koordinasyonu, yaygınlaştırma ve araştırma paydaşları arasında kurumsal iş birliğinin desteklenmesi.',
        },
        {
          title: 'DEEPZEKA Bilişim Yazılım Teknoloji Sanayi Ve Ticaret A.Ş.',
          body: 'Yapay zekâ ürünleştirme, teknik uygulama akışları ve araştırma çıktılarının operasyonel koordinasyonu.',
        },
        {
          title: 'Gazi Üniversitesi',
          body: 'Akademik çerçeve, araştırma metodolojisi ve klinik/alan bilgisi katkısının yapılandırılması.',
        },
      ],
      teamsTitle: 'Çalışma grupları',
      teams: [
        'Proje Yönetimi',
        'Akademik ve Klinik Ekip',
        'Yapay Zekâ ve Veri Bilimi',
        'Yazılım ve Teknik Altyapı',
        'Etik ve Veri Yönetişimi',
        'İletişim ve Yaygınlaştırma',
      ],
    },
    openScience: {
      id: 'acik-bilim',
      kicker: 'Açık bilim ve yayınlar',
      title: 'Açık Bilim ve Çıktılar',
      lead:
        'Açık bilim yaklaşımı; kod, dokümantasyon ve yayınların paylaşılmasını hedefler. Kişisel veriler, ham klinik kayıtlar veya tanımlanabilir ses kayıtları açık paylaşım kapsamına alınmaz.',
      catalogue: [
        { title: 'Açık kaynak kodlar', status: 'Hazırlanıyor' },
        { title: 'Teknik dokümantasyon', status: 'Hazırlanıyor' },
        { title: 'Model kartları', status: 'Yakında' },
        { title: 'Veri seti kartları', status: 'Yakında' },
        { title: 'Bilimsel yayınlar', status: 'Hazırlanıyor' },
        { title: 'Araştırma raporları', status: 'Hazırlanıyor' },
        { title: 'Konferans sunumları', status: 'Yakında' },
        { title: 'Çalıştay ve etkinlik çıktıları', status: 'Yakında' },
      ],
      privacyNote:
        'Açık bilim, kişisel veya klinik verilerin açık paylaşılması anlamına gelmez. Ham klinik kayıtlar, kişisel veriler ve tanımlanabilir ses kayıtları kamuya açık olarak paylaşılmayacaktır.',
    },
    news: {
      id: 'haberler',
      kicker: 'Haberler ve etkinlikler',
      title: 'Duyuru ve etkinlik akışı',
      lead:
        'Proje geliştirmeleri, bilimsel yayınlar, konferanslar, çalıştaylar ve açık kaynak duyuruları bu bölümde düzenli olarak paylaşılmak üzere planlanmaktadır.',
      categories: [
        'Proje gelişmeleri',
        'Bilimsel yayınlar',
        'Konferanslar',
        'Çalıştaylar',
        'Araştırma iş birlikleri',
        'Açık kaynak duyuruları',
        'Basın ve medya',
      ],
      emptyTitle: 'İlk duyurular hazırlanıyor',
      emptyBody:
        'Henüz yayınlanmış haber veya etkinlik girişi bulunmuyor. Bu alan, doğrulanmış proje gelişmeleri ve bilimsel çıktılar hazır oldukça güncellenecektir.',
    },
    contact: {
      id: 'iletisim',
      kicker: 'Hızlı bağlantı',
      title: 'Kurumsal İletişim',
      emailLabel: 'E-posta',
      email: 'info@deepzeka.com',
      body: 'Mesajınızı teknik ve kurumsal ekiplerimize yönlendirip en kısa sürede yanıtlıyoruz.',
      logoAlt: 'DeepZeka',
      logoPlaceholder: 'DeepZeka logosu bu alana eklenecek',
    },
  },
  footer: {
    description:
      'Türkçe konuşma verileri üzerinden akustik, zamansal ve dilsel örüntüleri araştırmaya yönelik kurumsal bir araştırma platformu.',
    disclaimer:
      'TürkSes bir tıbbi tanı veya tedavi sistemi değildir. Platform tarafından üretilen araştırma ve yapay zekâ çıktıları, sağlık profesyonelinin değerlendirmesinin ve klinik kararın yerine geçmez.',
    links: [
      { label: 'Proje Hakkında', href: '/proje' },
      { label: 'Nasıl Çalışıyor?', href: '/yaklasim' },
      { label: 'Araştırma ve Teknoloji', href: '/yaklasim' },
      { label: 'Veri ve Etik', href: '/veri-etik' },
      { label: 'Yol Haritası', href: '/yol-haritasi' },
      { label: 'Konsorsiyum ve Ekip', href: '/yol-haritasi' },
      { label: 'Açık Bilim', href: '/acik-bilim' },
      { label: 'Haberler', href: '/acik-bilim' },
      { label: 'İletişim', href: '/iletisim' },
    ],
    legalLinks: [
      { label: 'Gizlilik Politikası', href: '/veri-etik' },
      { label: 'KVKK Aydınlatma Metni', href: '/veri-etik' },
      { label: 'Çerez Politikası', href: '/veri-etik' },
      { label: 'Kullanım Koşulları', href: '/veri-etik' },
      { label: 'Açık Kaynak', href: '/acik-bilim' },
    ],
    bottom: {
      copyright: '© 2026 TürkSes',
      notice: 'Araştırma odaklıdır; tıbbi tanı yerine geçmez.',
    },
  },
};
