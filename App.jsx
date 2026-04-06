import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Code,
  Palette,
  Server,
  Globe,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Github,
  ExternalLink,
  Play,
  Download,
  Lightbulb,
  Target,
  Award,
  Briefcase
} from 'lucide-react'
import './App.css'

// Import images
import heroCoding from './assets/images/hero-coding.jpg'
import workspace from './assets/images/workspace.png'
import developerCoding from './assets/images/developer-coding.jpg'
import htmlCssJsIcons from './assets/images/html-css-js-icons.jpg'
import reactVueAngular from './assets/images/react-vue-angular.png'
import programmingIcons from './assets/images/programming-icons.png'
import vscodeInterface from './assets/images/vscode-interface.png'
import githubLogo from './assets/images/github-logo.png'
import figmaInterface from './assets/images/figma-interface.png'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Code className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">دليل تطوير الويب</h1>
            </div>
            <div className="hidden md:flex space-x-6 space-x-reverse">
              <a href="#paths" className="text-gray-600 hover:text-blue-600 transition-colors">المسارات</a>
              <a href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">الموارد</a>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 transition-colors">الأدوات</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">المشاريع</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">الأسئلة المتكررة</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                ابدأ من هنا...
                <span className="block text-blue-600">مسارك في عالم تطوير الويب</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                دليلك الشامل لتعلم تطوير الويب من الصفر إلى الاحتراف. 
                اكتشف المسارات المختلفة، تعلم التقنيات الحديثة، وابني مستقبلك المهني في عالم التكنولوجيا.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+50%</div>
                  <div className="text-sm text-gray-600">نمو الطلب على المطورين</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15,000 ريال</div>
                  <div className="text-sm text-gray-600">متوسط الراتب الشهري</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">6-12 شهر</div>
                  <div className="text-sm text-gray-600">مدة التعلم</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => document.getElementById('paths').scrollIntoView({ behavior: 'smooth' })}>
                  <Play className="ml-2 h-5 w-5" />
                  ابدأ رحلتك الآن
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => document.getElementById('paths').scrollIntoView({ behavior: 'smooth' })}>
                  <BookOpen className="ml-2 h-5 w-5" />
                  اكتشف المسارات
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroCoding} 
                alt="تطوير الويب" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-800">مجال سريع النمو</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Web Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              ما هو تطوير الويب؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تطوير الويب هو عملية إنشاء وصيانة المواقع الإلكترونية وتطبيقات الويب. 
              يشمل كل شيء من صفحات الويب البسيطة إلى التطبيقات المعقدة والمتاجر الإلكترونية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">مواقع الويب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">إنشاء مواقع تفاعلية وجذابة للشركات والأفراد</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">تطبيقات الويب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">تطوير تطبيقات معقدة مثل منصات التواصل والمتاجر</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">تجربة المستخدم</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">تصميم واجهات سهلة الاستخدام وتجربة مميزة</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">فرص العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">مجال واسع من الفرص الوظيفية والعمل الحر</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="paths" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              اختر المسار المناسب لك
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              هناك ثلاثة مسارات رئيسية في تطوير الويب. اختر المسار الذي يناسب اهتماماتك وأهدافك المهنية.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Path */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Palette className="h-12 w-12 text-blue-600" />
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">مبتدئ</Badge>
                </div>
                <CardTitle className="text-2xl text-blue-600">تطوير الواجهة الأمامية</CardTitle>
                <CardDescription className="text-lg">Frontend Development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  تطوير ما يراه المستخدم ويتفاعل معه. يشمل التصميم والتفاعلات والحركات.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">HTML, CSS, JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">React, Vue.js, Angular</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Figma, Adobe XD</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">6-9 أشهر</div>
                    <div className="text-xs text-gray-500">مدة التعلم</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">8-15 ألف</div>
                    <div className="text-xs text-gray-500">الراتب (ريال)</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>مناسب لمن:</strong> يحب التصميم والتفاعل المرئي
                  </p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform" onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}>
                  ابدأ مسار Frontend
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Backend Path */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Server className="h-12 w-12 text-green-600" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">متوسط</Badge>
                </div>
                <CardTitle className="text-2xl text-green-600">تطوير الواجهة الخلفية</CardTitle>
                <CardDescription className="text-lg">Backend Development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  تطوير منطق الخادم وقواعد البيانات والأنظمة التي تشغل التطبيقات.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Python, Node.js, PHP</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">MySQL, PostgreSQL, MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Django, Express.js, Laravel</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">8-12 شهر</div>
                    <div className="text-xs text-gray-500">مدة التعلم</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">10-18 ألف</div>
                    <div className="text-xs text-gray-500">الراتب (ريال)</div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>مناسب لمن:</strong> يحب المنطق والحلول التقنية
                  </p>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform" onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}>
                  ابدأ مسار Backend
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Fullstack Path */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-purple-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-purple-600 text-white">الأكثر طلباً</Badge>
              </div>
              <CardHeader className="pb-4 pt-12">
                <div className="flex items-center justify-between mb-4">
                  <Code className="h-12 w-12 text-purple-600" />
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">متقدم</Badge>
                </div>
                <CardTitle className="text-2xl text-purple-600">تطوير الويب الشامل</CardTitle>
                <CardDescription className="text-lg">Fullstack Development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  الجمع بين الواجهة الأمامية والخلفية لتطوير تطبيقات ويب كاملة.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">جميع تقنيات Frontend + Backend</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">MEAN, MERN, LAMP</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">DevOps, Cloud Services</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">12-18 شهر</div>
                    <div className="text-xs text-gray-500">مدة التعلم</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">12-25 ألف</div>
                    <div className="text-xs text-gray-500">الراتب (ريال)</div>
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>مناسب لمن:</strong> يريد فهم شامل للتطوير
                  </p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:scale-105 transition-transform" onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}>
                  ابدأ مسار Fullstack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              مكتبة الموارد التعليمية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة شاملة من أفضل الدورات والموارد التعليمية باللغتين العربية والإنجليزية
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Arabic Resources */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="ml-3 h-6 w-6" />
                  الدورات العربية
                </CardTitle>
                <CardDescription className="text-green-100">
                  موارد تعليمية عالية الجودة باللغة العربية
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Hsoub Academy */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">أكاديمية حسوب</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورة تطوير الواجهات الأمامية</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورة تطوير تطبيقات الويب باستخدام PHP</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورة JavaScript المتقدمة</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://academy.hsoub.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* Barmej */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">منصة برمج</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>معسكر Full Stack Developer</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورات متخصصة في React و Node.js</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://barmej.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* Tuwaiq Academy */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">أكاديمية طويق</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>معسكر تطوير مواقع الويب باستخدام Python</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>معسكر تطوير مواقع الويب باستخدام Java</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://tuwaiq.edu.sa/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* Elzero */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">قناة الزيرو (Elzero Web School)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>مسار Frontend Developer الكامل</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورات HTML, CSS, JavaScript</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://www.youtube.com/elzerowebschool" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة القناة
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* English Resources */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Globe className="ml-3 h-6 w-6" />
                  الدورات الإنجليزية المجانية
                </CardTitle>
                <CardDescription className="text-blue-100">
                  أفضل المنصات التعليمية العالمية المجانية
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* freeCodeCamp */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">freeCodeCamp</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Responsive Web Design Certification</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>JavaScript Algorithms and Data Structures</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Front End Development Libraries</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* The Odin Project */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">The Odin Project</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>مسار Full Stack JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>مسار Full Stack Ruby on Rails</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* CS50 */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">CS50's Web Programming</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>دورة هارفارد في تطوير الويب</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>تغطي Python, JavaScript, SQL</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="https://cs50.harvard.edu/web/2020/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="ml-2 h-4 w-4" />
                      زيارة الموقع
                    </a>
                  </Button>
                </div>

                {/* Interactive Platforms */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">منصات التطوير التفاعلية</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>CodePen - لتجربة HTML, CSS, JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Replit - بيئة تطوير شاملة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>GitHub Codespaces - بيئة تطوير سحابية</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href="#" onClick={(e) => e.preventDefault()} >
                      <ExternalLink className="ml-2 h-4 w-4" />
                      استكشف المنصات
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              مكتبة الأدوات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              الأدوات الأساسية التي يحتاجها كل مطور ويب لبناء مشاريع احترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Code Editors */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">محررات النصوص</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-blue-50 rounded-lg">
                  <img src={vscodeInterface} alt="VS Code" className="w-8 h-8 rounded" />
                  <div>
                    <div className="font-semibold">Visual Studio Code</div>
                    <div className="text-sm text-gray-600">المحرر الأكثر شعبية</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Sublime Text - محرر سريع وخفيف</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Atom - محرر مفتوح المصدر</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Version Control */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <Github className="h-8 w-8 text-gray-800" />
                  <CardTitle className="text-xl">التحكم في الإصدارات</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-lg">
                  <img src={githubLogo} alt="GitHub" className="w-8 h-8 rounded" />
                  <div>
                    <div className="font-semibold">Git & GitHub</div>
                    <div className="text-sm text-gray-600">نظام التحكم في الإصدارات</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">GitLab - بديل لـ GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Bitbucket - من Atlassian</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Tools */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-xl">أدوات التصميم</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-purple-50 rounded-lg">
                  <img src={figmaInterface} alt="Figma" className="w-8 h-8 rounded" />
                  <div>
                    <div className="font-semibold">Figma</div>
                    <div className="text-sm text-gray-600">أداة التصميم التعاونية</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Adobe XD - تصميم واجهات المستخدم</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Sketch - أداة تصميم للماك</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* First Project Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              مشروعك الأول
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ابدأ رحلتك العملية بمشاريع بسيطة ومفيدة تساعدك على تطبيق ما تعلمته
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Frontend Projects */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-600 flex items-center">
                  <Palette className="ml-2 h-6 w-6" />
                  مشاريع Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">موقع شخصي</h4>
                    <p className="text-sm text-gray-600">صفحة تعريفية بسيطة</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">تطبيق الطقس</h4>
                    <p className="text-sm text-gray-600">عرض حالة الطقس</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">آلة حاسبة</h4>
                    <p className="text-sm text-gray-600">تطبيق حاسبة تفاعلي</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">متجر إلكتروني بسيط</h4>
                    <p className="text-sm text-gray-600">عرض المنتجات</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => window.open('https://github.com/topics/frontend-project-ideas', '_blank')}>
                  <Lightbulb className="ml-2 h-4 w-4" />
                  استكشف المشاريع
                </Button>
              </CardContent>
            </Card>

            {/* Backend Projects */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-600 flex items-center">
                  <Server className="ml-2 h-6 w-6" />
                  مشاريع Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">API للمهام</h4>
                    <p className="text-sm text-gray-600">إدارة قائمة المهام</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">نظام تسجيل دخول</h4>
                    <p className="text-sm text-gray-600">مصادقة المستخدمين</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">مدونة بقاعدة بيانات</h4>
                    <p className="text-sm text-gray-600">حفظ المقالات</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">API للطقس</h4>
                    <p className="text-sm text-gray-600">جلب بيانات الطقس</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" onClick={() => window.open('https://github.com/topics/backend-project-ideas', '_blank')}>
                  <Target className="ml-2 h-4 w-4" />
                  استكشف المشاريع
                </Button>
              </CardContent>
            </Card>

            {/* Fullstack Projects */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-xl text-purple-600 flex items-center">
                  <Code className="ml-2 h-6 w-6" />
                  مشاريع Fullstack
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">تطبيق إدارة المهام</h4>
                    <p className="text-sm text-gray-600">مع واجهة وخادم</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">منصة تدوين</h4>
                    <p className="text-sm text-gray-600">نظام مدونة كامل</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">متجر إلكتروني</h4>
                    <p className="text-sm text-gray-600">مع سلة التسوق</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">شبكة اجتماعية بسيطة</h4>
                    <p className="text-sm text-gray-600">مشاركة المنشورات</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" onClick={() => window.open('https://github.com/topics/fullstack-project-ideas', '_blank')}>
                  <Award className="ml-2 h-4 w-4" />
                  استكشف المشاريع
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Deployment Platforms */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                منصات النشر المجانية
              </CardTitle>
              <CardDescription className="text-center text-lg">
                انشر مشاريعك على الإنترنت مجاناً
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Github className="h-8 w-8 text-gray-800 mx-auto mb-2" />
                  <h4 className="font-semibold">GitHub Pages</h4>
                  <p className="text-sm text-gray-600">لمواقع Frontend الثابتة</p>
                </a>
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Netlify</h4>
                  <p className="text-sm text-gray-600">نشر سريع ومجاني</p>
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Server className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Vercel</h4>
                  <p className="text-sm text-gray-600">منصة نشر حديثة</p>
                </a>
                <a href="https://railway.app/" target="_blank" rel="noopener noreferrer" className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Code className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Railway</h4>
                  <p className="text-sm text-gray-600">لتطبيقات Fullstack</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              ما بعد الأساسيات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              كيف تبني ملف أعمال قوي وتبحث عن فرص العمل أو العمل الحر
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Portfolio Building */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Briefcase className="ml-3 h-6 w-6" />
                  بناء ملف الأعمال (Portfolio)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">المشاريع المتنوعة</h4>
                      <p className="text-sm text-gray-600">3-5 مشاريع مختلفة تظهر مهاراتك</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">الكود المصدري</h4>
                      <p className="text-sm text-gray-600">روابط GitHub لجميع المشاريع</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">العروض التوضيحية</h4>
                      <p className="text-sm text-gray-600">روابط المشاريع المباشرة</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">التصميم الاحترافي</h4>
                      <p className="text-sm text-gray-600">واجهة جذابة ومنظمة</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">منصات عرض Portfolio</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">• GitHub Pages - استضافة مجانية</a></li>
                    <li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">• Netlify - نشر سريع</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>• Personal Website - موقع شخصي</a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">• LinkedIn - الملف المهني</a></li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Job Search */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Users className="ml-3 h-6 w-6" />
                  البحث عن فرص العمل
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">مواقع الوظائف</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                        <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                        <a href="https://www.bayt.com/" target="_blank" rel="noopener noreferrer">Bayt.com</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                        <a href="https://www.gulftalent.com/" target="_blank" rel="noopener noreferrer">GulfTalent</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                        <a href="https://wuzzuf.net/" target="_blank" rel="noopener noreferrer">Wuzzuf</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">العمل الحر</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                        <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">Upwork</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                        <a href="https://www.freelancer.com/" target="_blank" rel="noopener noreferrer">Freelancer</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                        <a href="https://khamsat.com/" target="_blank" rel="noopener noreferrer">Khamsat</a>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                        <a href="https://mostaql.com/" target="_blank" rel="noopener noreferrer">Mostaql</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">نصائح للحصول على الوظيفة</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• تطوير المهارات باستمرار</li>
                    <li>• بناء شبكة علاقات مهنية</li>
                    <li>• المشاركة في المجتمع التقني</li>
                    <li>• التطوع في المشاريع مفتوحة المصدر</li>
                    <li>• الحصول على شهادات معتمدة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              الأسئلة المتكررة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول تعلم تطوير الويب
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">هل أحتاج شهادة جامعية؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    لا، الشهادة الجامعية ليست ضرورية. المهارات العملية والمشاريع أهم من الشهادات في مجال تطوير الويب.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">كم من الوقت أحتاج لتعلم البرمجة؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    يعتمد على المسار والوقت المتاح. عادة 6-18 شهر للوصول لمستوى يؤهلك للعمل، مع التعلم المستمر.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">ما هي أفضل لغة برمجة للبداية؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ابدأ بـ HTML و CSS و JavaScript للواجهة الأمامية، أو Python للواجهة الخلفية لسهولة تعلمها.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">هل يمكنني تعلم البرمجة وأنا أعمل؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    نعم، يمكنك التعلم بدوام جزئي. خصص 1-2 ساعة يومياً وستحقق تقدماً ملحوظاً خلال أشهر.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">كيف أجد وظيفة كمطور ويب؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ابني portfolio قوي، تواصل مع المجتمع التقني، ابحث في مواقع الوظائف، وفكر في العمل الحر كبداية.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">ما الفرق بين Frontend و Backend؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Frontend هو ما يراه المستخدم (الواجهة)، Backend هو منطق الخادم وقواعد البيانات (خلف الكواليس).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            هل أنت مستعد لبدء رحلتك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            انضم إلى آلاف المطورين الذين بدأوا رحلتهم من هنا وحققوا أحلامهم المهنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => document.getElementById('paths').scrollIntoView({ behavior: 'smooth' })}>
              <Play className="ml-2 h-5 w-5" />
              ابدأ التعلم الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.open('/path/to/your/beginners_guide.pdf', '_blank')}> {/* Placeholder for PDF download */}
              <Download className="ml-2 h-5 w-5" />
              حمل دليل المبتدئين
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <Code className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">دليل تطوير الويب</h3>
              </div>
              <p className="text-gray-400">
                دليلك الشامل لتعلم تطوير الويب من الصفر إلى الاحتراف
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">المسارات</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#paths" className="hover:text-white transition-colors">Frontend Development</a></li>
                <li><a href="#paths" className="hover:text-white transition-colors">Backend Development</a></li>
                <li><a href="#paths" className="hover:text-white transition-colors">Fullstack Development</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">الموارد</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#resources" className="hover:text-white transition-colors">الدورات العربية</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">الدورات الإنجليزية</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">الأدوات</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">المشاريع</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@yourwebsite.com" className="hover:text-white transition-colors">البريد الإلكتروني</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">تويتر</a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">لينكد إن</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 دليل تطوير الويب. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



