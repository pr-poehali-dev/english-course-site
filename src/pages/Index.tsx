import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время для записи на демо-урок.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToDemo = () => {
    document.getElementById('demo-lesson')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-20 px-4 animate-gradient-shift bg-[length:200%_200%]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                🔥 Акция: первый урок бесплатно
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Заговорите на английском за 3 месяца
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Авторская методика от преподавателя с 10-летним опытом. Индивидуальный подход и результат с первого урока.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToDemo} className="bg-white text-purple-600 hover:bg-purple-50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Записаться на демо-урок
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}>
                  Программа курса
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/3251b1a1-e2e6-4800-94e7-6eafdc5ab186/files/c8950ad5-37ea-481d-9a74-96f28badf5f0.jpg"
                alt="English Learning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">Структурированное обучение от базы до свободного общения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'BookOpen',
                title: 'Уровень Beginner-Elementary',
                duration: '3 месяца',
                topics: ['Грамматика с нуля', 'Базовая лексика 1000+ слов', 'Разговорная практика', 'Произношение'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: 'MessageCircle',
                title: 'Уровень Intermediate',
                duration: '4 месяца',
                topics: ['Продвинутая грамматика', 'Деловой английский', 'Свободное общение', 'Подготовка к экзаменам'],
                color: 'from-pink-500 to-pink-600'
              },
              {
                icon: 'Award',
                title: 'Уровень Advanced',
                duration: '3 месяца',
                topics: ['Идиомы и сленг', 'Академический английский', 'Презентации', 'Подготовка к IELTS/TOEFL'],
                color: 'from-blue-500 to-blue-600'
              }
            ].map((level, idx) => (
              <Card key={idx} className="border-2 hover:border-purple-300 transition-all hover:shadow-xl hover:-translate-y-2 duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={level.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                  <CardDescription className="text-lg">
                    <Icon name="Clock" className="inline mr-2" size={16} />
                    {level.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Тарифы и цены
            </h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат обучения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '3 500',
                period: 'за урок',
                features: ['8 уроков в месяц', 'Групповые занятия', 'Доступ к материалам', 'Домашние задания'],
                popular: false
              },
              {
                name: 'Популярный',
                price: '5 000',
                period: 'за урок',
                features: ['12 уроков в месяц', 'Индивидуальные занятия', 'Все материалы включены', 'Проверка д/з 24/7', 'Разговорные клубы'],
                popular: true
              },
              {
                name: 'Интенсив',
                price: '7 000',
                period: 'за урок',
                features: ['20 уроков в месяц', 'VIP поддержка', 'Личный куратор', 'Экспресс-подготовка', 'Гарантия результата'],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-4 border-purple-500 shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 shadow-lg">
                      ⭐ Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-gray-500 ml-2">₽</span>
                  </div>
                  <CardDescription className="text-base">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="CheckCircle" className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`} size="lg" onClick={scrollToDemo}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/3251b1a1-e2e6-4800-94e7-6eafdc5ab186/files/22a7e3bb-14bf-4781-9826-c4433395317b.jpg"
                alt="English Teacher"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-purple-100 text-purple-700">
                <Icon name="Star" className="mr-2" size={16} />
                10 лет опыта
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                О преподавателе
              </h2>
              <h3 className="text-2xl font-semibold mb-4">Анна Петрова</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Сертифицированный преподаватель английского языка с 10-летним опытом. Окончила МГЛУ по специальности "Лингвистика и межкультурная коммуникация". Международные сертификаты: CELTA, IELTS (8.5), CPE.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'Users', text: 'Более 500 студентов достигли своих целей' },
                  { icon: 'Trophy', text: 'Средний балл студентов на IELTS: 7.5' },
                  { icon: 'Globe', text: 'Работала в языковых школах Великобритании и США' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon name={item.icon as any} className="text-purple-600" size={20} />
                    </div>
                    <p className="text-gray-700 pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Отзывы студентов
            </h2>
            <p className="text-xl text-gray-600">Что говорят наши выпускники</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Мария К.',
                role: 'Менеджер по продажам',
                rating: 5,
                text: 'За 4 месяца подготовилась к IELTS и получила 7.5 баллов! Анна - потрясающий преподаватель, который находит подход к каждому.',
                avatar: '👩‍💼'
              },
              {
                name: 'Дмитрий С.',
                role: 'IT-специалист',
                rating: 5,
                text: 'Начинал с нуля, теперь свободно общаюсь с иностранными коллегами. Методика работает! Очень доволен результатом.',
                avatar: '👨‍💻'
              },
              {
                name: 'Елена В.',
                role: 'Студентка',
                rating: 5,
                text: 'Готовилась к поступлению в зарубежный вуз. Получила приглашение от университета мечты! Спасибо за профессионализм!',
                avatar: '👩‍🎓'
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-lesson" className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Запишитесь на бесплатный демо-урок
            </h2>
            <p className="text-xl text-purple-100">
              Познакомимся, определим ваш уровень и составим индивидуальный план обучения
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ivan@example.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Телефон</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (900) 123-45-67"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Комментарий</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о своих целях изучения английского..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                  Записаться на бесплатный урок
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">English Pro</h3>
              <p className="text-gray-400">Профессиональное обучение английскому языку онлайн</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-3" size={18} />
                  +7 (900) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-3" size={18} />
                  info@englishpro.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-3" size={18} />
                  Москва, Россия
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                {['Instagram', 'MessageCircle', 'Youtube'].map((social, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-all hover:scale-110">
                    <Icon name={social as any} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 English Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
