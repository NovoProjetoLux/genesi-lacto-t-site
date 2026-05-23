import { useEffect } from 'react'
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  Gauge,
  LineChart,
  Map,
  Milk,
  Route,
  ShieldCheck,
  Thermometer,
  Truck,
  Warehouse,
  Zap,
} from 'lucide-react'
import './App.css'

const problemItems = [
  ['Falha de refrigeração', 'O leite pode sair da faixa ideal ainda na propriedade, antes que a equipe de qualidade tenha qualquer sinal visível.'],
  ['Falta de energia', 'Uma interrupção curta pode comprometer o resfriamento e gerar discussão quando o prejuízo já aconteceu.'],
  ['Transporte fora de faixa', 'Sem histórico contínuo, a rota entre campo e indústria vira um trecho sem evidência operacional.'],
  ['Ausência de histórico', 'Produtor, transportador e laticínio dependem de relatos, planilhas e memória para explicar desvios.'],
  ['Decisão tardia', 'Quando a informação chega apenas no recebimento, a operação perde a chance de agir preventivamente.'],
  ['Disputa sem evidência', 'Sem dados compartilháveis, a cadeia discute responsabilidade em vez de proteger qualidade.'],
]

const chainSteps = [
  ['Propriedade', 'Condições do leite acompanhadas antes da coleta.', Warehouse],
  ['Coleta', 'Registro da operação no momento em que ela acontece.', ClipboardCheck],
  ['Transporte', 'Temperatura, rota e conservação durante o percurso.', Truck],
  ['Laticínio', 'Chegada com histórico para qualificar decisões.', Factory],
  ['Histórico e alertas', 'Informação organizada para gestão e auditoria.', BellRing],
]

const valueBlocks = [
  {
    title: 'Produtor',
    icon: Milk,
    text: 'O produtor ganha visibilidade sobre o leite que está sob sua responsabilidade. O acompanhamento contínuo ajuda a proteger a qualidade antes da coleta, reduz o risco de perda por falha de refrigeração e oferece evidência da temperatura quando a relação com o laticínio exige confiança.',
    bullets: ['Proteção da qualidade no tanque', 'Evidência para conversas comerciais', 'Mais confiança antes da coleta'],
  },
  {
    title: 'Laticínio e integração',
    icon: Building2,
    text: 'O laticínio deixa de operar apenas no recebimento e passa a enxergar pontos críticos ao longo da cadeia. A gestão consegue observar histórico por propriedade, rota e caminhão, antecipar desvios e reduzir discussões sem dados entre fornecedores, frota e indústria.',
    bullets: ['Rastreabilidade por elo da cadeia', 'Antecipação de falhas operacionais', 'Base confiável para qualidade'],
  },
  {
    title: 'Transportista',
    icon: Route,
    text: 'O transporte passa a carregar também a evidência da operação. Temperatura, rota e eventos ficam registrados, valorizando o serviço prestado, comprovando boas práticas e reduzindo o risco de responsabilização indevida por situações que não ocorreram durante o percurso.',
    bullets: ['Comprovação de boas práticas', 'Rota e chegada documentadas', 'Mais transparência com o cliente'],
  },
]

const impactItems = [
  ['Monitoramento', 'contínuo', 'Menos tempo sem visibilidade entre campo, frota e indústria.'],
  ['Histórico', 'por propriedade', 'Qualidade observada no contexto de cada produtor.'],
  ['Histórico', 'por rota', 'Percursos avaliados com evidência operacional.'],
  ['Temperatura', 'ao longo da cadeia', 'Cada grau acompanhado como informação de negócio.'],
  ['Alertas', 'configuráveis', 'Sinais operacionais antes que o problema cresça.'],
  ['Auditoria', 'com evidência', 'Registros organizados para qualidade e gestão.'],
]

const howItWorks = [
  ['Instalação dos equipamentos', 'Os pontos de monitoramento são posicionados na propriedade e no caminhão para acompanhar as etapas críticas da operação.'],
  ['Vinculação à propriedade ou veículo', 'Cada equipamento passa a representar um produtor, uma rota ou um veículo dentro da cadeia monitorada.'],
  ['Envio automático dos dados', 'As informações relevantes chegam à plataforma sem depender de preenchimento manual ou lembrança operacional.'],
  ['Organização em histórico', 'Temperatura, rota, operação e chegada são estruturadas para consulta, auditoria e gestão da qualidade.'],
  ['Alertas e decisões operacionais', 'A equipe recebe sinais configuráveis para agir antes, documentar melhor e reduzir incertezas.'],
]

const trustItems = [
  [Warehouse, 'Campo monitorado'],
  [Truck, 'Frota acompanhada'],
  [LineChart, 'Dados organizados'],
  [ShieldCheck, 'Histórico confiável'],
  [BellRing, 'Alertas operacionais'],
  [Map, 'Rastreabilidade'],
  [CheckCircle2, 'Apoio à qualidade'],
]

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.16 },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toString())
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <main>
      <div className="progress" aria-hidden="true" />

      <section className="hero" id="top">
        <img
          className="hero__image"
          src="/assets/milk-processing-factory.jpg"
          alt="Ambiente industrial de processamento de leite"
          loading="eager"
        />
        <div className="hero__shade" />
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="GENESI LACTO T">
            <span className="brand__mark">G</span>
            <span>
              <strong>GENESI</strong>
              <small>LACTO T</small>
            </span>
          </a>
          <div className="nav__links">
            <a href="#solucao">Solução</a>
            <a href="#valor">Valor</a>
            <a href="#funciona">Como funciona</a>
          </div>
        </nav>

        <div className="hero__content" data-reveal>
          <span className="eyebrow">Monitoramento inteligente para a cadeia laticínia</span>
          <h1>Rastreabilidade térmica para proteger a qualidade do leite do produtor ao laticínio.</h1>
          <p>
            Monitoramento inteligente em propriedade, coleta e transporte para reduzir incertezas, comprovar boas
            práticas e transformar temperatura em decisão operacional.
          </p>
          <div className="hero__actions" aria-label="Ações principais">
            <a className="button button--primary" href="#solucao">
              Explorar solução <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href="#funciona">
              Ver como funciona <ArrowDown size={18} />
            </a>
          </div>
        </div>

        <div className="hero__signal" aria-label="Resumo da operação monitorada" data-reveal>
          <div>
            <Thermometer size={20} />
            <span>Temperatura</span>
          </div>
          <div>
            <Route size={20} />
            <span>Rota</span>
          </div>
          <div>
            <ShieldCheck size={20} />
            <span>Evidência</span>
          </div>
        </div>
      </section>

      <section className="section problem" data-reveal>
        <div className="section__intro">
          <span className="eyebrow">O problema invisível da cadeia do leite</span>
          <h2>A qualidade pode ser comprometida antes que alguém perceba.</h2>
          <p>
            Uma falha de energia, um tanque trabalhando fora da faixa, uma coleta em atraso ou um transporte sem
            histórico podem gerar perda de valor. Sem dados, a cadeia reage tarde e discute causas depois do prejuízo.
            O GENESI LACTO T cria visibilidade contínua onde antes havia incerteza.
          </p>
        </div>
        <div className="problem__grid">
          {problemItems.map(([title, text], index) => (
            <article className="problem-card" key={title} style={{ '--delay': `${index * 60}ms` }} data-reveal>
              <AlertTriangle size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section chain" id="solucao">
        <div className="section__intro section__intro--center" data-reveal>
          <span className="eyebrow">Uma operação conectada ponta a ponta</span>
          <h2>Da propriedade ao laticínio, cada grau importa.</h2>
          <p>
            O GENESI LACTO T cria uma linha contínua de dados. A propriedade informa a condição do leite antes da coleta.
            O caminhão registra temperatura e operação durante o transporte. A plataforma organiza tudo em histórico
            para gestão, auditoria e tomada de decisão.
          </p>
        </div>
        <div className="chain__flow" data-reveal>
          {chainSteps.map(([title, text, Icon], index) => (
            <article className="chain-step" key={title}>
              <div className="chain-step__icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < chainSteps.length - 1 && <span className="chain-step__line" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </section>

      <section className="feature feature--property" data-reveal>
        <div className="feature__media">
          <img src="/assets/dairy-farm-milking.jpg" alt="Operação de ordenha em propriedade leiteira" loading="lazy" />
        </div>
        <div className="feature__content">
          <span className="eyebrow">Na propriedade</span>
          <h2>O tanque passa a falar antes do problema chegar ao recebimento.</h2>
          <p>
            O produtor não precisa esperar o problema aparecer no recebimento. A propriedade passa a ter um ponto de
            monitoramento contínuo, capaz de transformar o tanque em uma fonte de informação para proteger qualidade e
            valor.
          </p>
          <ul className="checklist">
            <li><CheckCircle2 size={18} />Acompanhamento da temperatura do leite armazenado</li>
            <li><CheckCircle2 size={18} />Status de comunicação da operação</li>
            <li><CheckCircle2 size={18} />Apoio na identificação de falha de energia ou refrigeração</li>
            <li><CheckCircle2 size={18} />Histórico por produtor e propriedade</li>
            <li><CheckCircle2 size={18} />Preparação para acompanhamento futuro de peso e volume</li>
          </ul>
        </div>
      </section>

      <section className="feature feature--truck" data-reveal>
        <div className="feature__content">
          <span className="eyebrow">No caminhão</span>
          <h2>O transporte deixa de ser um trecho cego.</h2>
          <p>
            Cada rota pode carregar não apenas o leite, mas também o histórico das condições em que ele foi coletado e
            transportado. Isso transforma temperatura, trajeto e chegada em evidência comercial e operacional.
          </p>
          <ul className="checklist">
            <li><CheckCircle2 size={18} />Temperatura durante coleta e transporte</li>
            <li><CheckCircle2 size={18} />Rota percorrida com contexto operacional</li>
            <li><CheckCircle2 size={18} />Eventos relevantes da operação</li>
            <li><CheckCircle2 size={18} />Histórico de chegada ao laticínio</li>
            <li><CheckCircle2 size={18} />Comprovação de boas práticas</li>
          </ul>
        </div>
        <div className="feature__media">
          <img src="/assets/milk-collection-truck.jpg" alt="Trabalho de coleta de leite em veículo rural" loading="lazy" />
        </div>
      </section>

      <section className="management section" data-reveal>
        <div className="management__panel">
          <span className="eyebrow">Na gestão</span>
          <h2>Temperatura, rota e operação em um único histórico confiável.</h2>
          <p>
            A plataforma recebe dados dos equipamentos, organiza histórico por propriedade, rota e operação, permite
            alertas configuráveis e oferece evidência para gestão de qualidade, auditoria e integração futura. O foco é
            dar ao gestor uma visão preventiva, não apenas um relatório depois do problema.
          </p>
        </div>
        <div className="management__visual" aria-label="Camadas de gestão">
          <span>Dados recebidos</span>
          <span>Histórico organizado</span>
          <span>Alertas configuráveis</span>
          <span>Auditoria e qualidade</span>
        </div>
      </section>

      <section className="section value" id="valor">
        <div className="section__intro" data-reveal>
          <span className="eyebrow">Valor para cada elo da cadeia</span>
          <h2>Mais confiança para quem produz, transporta e recebe.</h2>
        </div>
        <div className="value__grid">
          {valueBlocks.map(({ title, icon: Icon, text, bullets }) => (
            <article className="value-card" key={title} data-reveal>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section impact">
        <div className="section__intro section__intro--center" data-reveal>
          <span className="eyebrow">Impacto operacional</span>
          <h2>Menos perdas silenciosas. Mais evidência. Mais controle.</h2>
        </div>
        <div className="impact__grid">
          {impactItems.map(([label, value, text]) => (
            <article className="impact-card" key={`${label}-${value}`} data-reveal>
              <strong>{label}</strong>
              <span>{value}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section how" id="funciona">
        <div className="section__intro" data-reveal>
          <span className="eyebrow">Como funciona</span>
          <h2>Uma implantação clara para transformar informação em decisão.</h2>
        </div>
        <div className="timeline">
          {howItWorks.map(([title, text], index) => (
            <article className="timeline__item" key={title} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" data-reveal>
        <div className="trust__image">
          <img src="/assets/milk-stainless-container.jpg" alt="Leite sendo transferido para recipiente de aço inox" loading="lazy" />
        </div>
        <div className="trust__content">
          <span className="eyebrow">Confiança operacional</span>
          <h2>A cadeia monitorada fica mais forte porque cada etapa passa a ter contexto.</h2>
          <div className="trust__grid">
            {trustItems.map(([Icon, label]) => (
              <div key={label}>
                <Icon size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section now" data-reveal>
        <div className="now__content">
          <span className="eyebrow">Por que agora</span>
          <h2>Qualidade do leite não deve depender de suposição.</h2>
          <p>
            A cadeia do leite está cada vez mais pressionada por qualidade, eficiência, rastreabilidade e redução de
            perdas. Operações que dependem apenas de inspeção final perdem capacidade de prevenção. Monitorar antes,
            durante e depois da coleta muda a forma como a qualidade é gerida.
          </p>
        </div>
        <div className="now__meters" aria-hidden="true">
          <span><Gauge size={22} />Qualidade</span>
          <span><Clock3 size={22} />Prevenção</span>
          <span><Zap size={22} />Resposta</span>
        </div>
      </section>

      <section className="final-cta" data-reveal>
        <span className="eyebrow">GENESI LACTO T</span>
        <h2>Transforme a qualidade do leite em uma operação mensurável.</h2>
        <p>
          GENESI LACTO T conecta campo, frota e indústria em uma camada contínua de informação para proteger valor,
          reduzir incertezas e fortalecer a confiança em toda a cadeia.
        </p>
        <a className="button button--primary" href="mailto:contato@genesitech.com.br?subject=Apresentação%20GENESI%20LACTO%20T">
          Solicitar apresentação <ArrowRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default App
