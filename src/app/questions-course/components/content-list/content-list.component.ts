import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserData } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  user: UserData;

  title = 'estrategia-med';
  jsonFiles: any[] = [];
  private URL = '../assets/json/Aleitamento materno Revisão.json';
  questionsListData: any[] = [];
  questionsListFormatted: any[] = [];
  activeMeta: string = '';
  activeContent: string = '';
  selectedOptions: any[] = [];
  activeQuestion: number = 0;
  activeOptionQuestion: any = null;
  textCheckButtons: any[] = [];
  activeState: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(x => this.user = x);
    
    this.jsonFiles = [
      {
        meta: "META 1",
        metaPdf: "META 1/Meta 1 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 2",
        metaPdf: "META 2/Meta 2 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 3",
        metaPdf: "META 3/Meta 3 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 4",
        metaPdf: "META 4/Meta 4 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 5",
        metaPdf: "META 5/Meta 5 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 6",
        metaPdf: "META 6/Meta 6 - Mentoria Revalida 20231.pdf",
        listContent: [

        ],
        listFiles: [

        ]
      },
      {
        meta: "META 7",
        metaPdf: "META 7/Meta 7 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Aleitamento materno Revisão',
          'Assistência ao parto Revisão',
          'Cirurgia Pediátrica I',
          'Cirurgia pediátrica II',
          'Complicações agudas da DM2',
          'Doença aterosclerótica coronariana',
          'Doença inflamatória intestinal',
          'Faringites e abscesso cervical',
          'Hepatites Virais',
          'Influenza Revisão',
          'ITU em pediatria',
          'Oncohematologia',
          'Ortopedia e Traumatologia',
          'Partograma e distocia',
          'Planejamento familiar Revisão',
          'Processo Saúde Doença',
          'Revisão por Questões Meta 7',
          'Revisão por questões Meta 72'
        ],
        listFiles: [
          'META 7/Aleitamento materno Revisão/Aleitamento materno Revisão.json',
          'META 7/Aleitamento materno Revisão/Aleitamento materno Revisão2.json',
          'META 7/Assistência ao parto Revisão/Assistência ao parto Revisão.json',
          'META 7/Assistência ao parto Revisão/Assistência ao parto Revisão2.json',
          'META 7/Cirurgia Pediátrica I/Cirurgia Pediátrica I.json',
          'META 7/Cirurgia Pediátrica I/Cirurgia Pediátrica I2.json',
          'META 7/Cirurgia pediátrica II/Cirurgia pediátrica II.json',
          'META 7/Cirurgia pediátrica II/Cirurgia pediátrica II2.json',
          'META 7/Complicações agudas da DM2/Complicações agudas da DM2.json',
          'META 7/Doença aterosclerótica coronariana/Doença aterosclerótica coronariana.json',
          'META 7/Doença inflamatória intestinal/Doença inflamatória intestinal.json',
          'META 7/Faringites e abscesso cervical/Faringites e abscesso cervical.json',
          'META 7/Hepatites Virais/Hepatites Virais.json',
          'META 7/Hepatites Virais/Hepatites Virais2.json',
          'META 7/Influenza Revisão/Influenza Revisão.json',
          'META 7/Influenza Revisão/Influenza Revisão2.json',
          'META 7/ITU em pediatria/ITU em pediatria.json',
          'META 7/Oncohematologia/Oncohematologia.json',
          'META 7/Oncohematologia/Oncohematologia2.json',
          'META 7/Ortopedia e Traumatologia/Ortopedia e Traumatologia.json',
          'META 7/Ortopedia e Traumatologia/Ortopedia e Traumatologia2.json',
          'META 7/Partograma e distocia/Partograma e distocia.json',
          'META 7/Partograma e distocia/Partograma e distocia2.json',
          'META 7/Planejamento familiar Revisão/Planejamento familiar Revisão.json',
          'META 7/Planejamento familiar Revisão/Planejamento familiar Revisão2.json',
          'META 7/Processo Saúde Doença/Processo Saúde Doença.json',
          'META 7/Processo Saúde Doença/Processo Saúde Doença2.json',
          'META 7/Revisão por Questões Meta 7/Revisão por Questões Meta 7.json',
          'META 7/Revisão por Questões Meta 7/Revisão por Questões Meta 72.json',
          'META 7/Revisão por questões Meta 72/Revisão por questões Meta 72.json',
          'META 7/Revisão por questões Meta 72/Revisão por questões Meta 722.json'
        ]
      },
      {
        meta: "META 8",
        metaPdf: "META 8/Meta 8 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Artropatias inflamatórias I',
          'Cefaleias',
          'Cirurgia Pediátrica Revisão',
          'Cirurgia Vascular I',
          'DM2 Complicações agudas',
          'Doença Inflamatória Intestinal Revisão',
          'ITU na infância Revisão',
          'Nutrição infantil',
          'Nutrição Infantil II',
          'Parasitoses intestinais',
          'Parasitoses revisão',
          'Partograma e Distocia Revisão',
          'Proc Descentralização e Reg SUS',
          'Processo Saúde Doença Revisão',
          'Psiquiatria infantil',
          'Revisão por questões meta 8',
          'Revisão por questões Meta 8 Ginecologia',
          'Vulvovaginites',
          'Vulvovaginites Revisão'
        ],
        listFiles: [
          'META 8/Artropatias inflamatórias I/Artropatias inflamatórias I.json',
          'META 8/Cefaleias/Cefaleias.json',
          'META 8/Cirurgia Pediátrica Revisão/Cirurgia Pediátrica Revisão.json',
          'META 8/Cirurgia Pediátrica Revisão/Cirurgia Pediátrica Revisão2.json',
          'META 8/Cirurgia Vascular I/Cirurgia Vascular I.json',
          'META 8/DM2 Complicações agudas/DM2 Complicações agudas.json',
          'META 8/DM2 Complicações agudas/DM2 Complicações agudas2.json',
          'META 8/Doença Inflamatória Intestinal Revisão/Doença Inflamatória Intestinal Revisão.json',
          'META 8/Doença Inflamatória Intestinal Revisão/Doença Inflamatória Intestinal Revisão2.json',
          'META 8/ITU na infância Revisão/ITU na infância Revisão.json',
          'META 8/ITU na infância Revisão/ITU na infância Revisão2.json',
          'META 8/Nutrição infantil/Nutrição infantil.json',
          'META 8/Nutrição Infantil II/Nutrição Infantil II.json',
          'META 8/Parasitoses intestinais/Parasitoses intestinais.json',
          'META 8/Parasitoses revisão/Parasitoses revisão.json',
          'META 8/Parasitoses revisão/Parasitoses revisão2.json',
          'META 8/Partograma e Distocia Revisão/Partograma e Distocia Revisão.json',
          'META 8/Partograma e Distocia Revisão/Partograma e Distocia Revisão2.json',
          'META 8/Proc Descentralização e Reg SUS/Proc Descentralização e Reg SUS.json',
          'META 8/Proc Descentralização e Reg SUS/Proc Descentralização e Reg SUS2.json',
          'META 8/Processo Saúde Doença Revisão/Processo Saúde Doença Revisão.json',
          'META 8/Processo Saúde Doença Revisão/Processo Saúde Doença Revisão2.json',
          'META 8/Psiquiatria infantil/Psiquiatria infantil.json',
          'META 8/Revisão por questões meta 8/Revisão por questões meta 8.json',
          'META 8/Revisão por questões meta 8/Revisão por questões meta 82.json',
          'META 8/Revisão por questões Meta 8 Ginecologia/Revisão por questões Meta 8 Ginecologia.json',
          'META 8/Revisão por questões Meta 8 Ginecologia/Revisão por questões Meta 8 Ginecologia2.json',
          'META 8/Vulvovaginites/Vulvovaginites.json',
          'META 8/Vulvovaginites Revisão/Vulvovaginites Revisão.json',
          'META 8/Vulvovaginites Revisão/Vulvovaginites Revisão2.json'
        ]
      },
      {
        meta: "META 9",
        metaPdf: "META 9/Meta 9 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Cirurgia Vascular II',
          'Cirurgia Vascular Revisão',
          'Doença aterosclerótica coronariana Revisão',
          'Doenças benignas da mama',
          'Hemorragia digestiva',
          'Hemorragia pós parto e infecção puerperal',
          'IVAS II',
          'Lesão renal aguda',
          'Neoplasias pulmonares',
          'Nutrição infantil Revisão',
          'Outras hepatopatias',
          'Pneumonias',
          'Pneumonias2',
          'Proc Desc E Reg SUS Financiamento em saúd',
          'Revisão por questões Obstetrícia Meta 9',
          'Revisão por questões Pediatria',
          'Saúde do Trabalhador'
        ],
        listFiles: [
          'META 9/Cirurgia Vascular II/Cirurgia Vascular II.json',
          'META 9/Cirurgia Vascular Revisão/Cirurgia Vascular Revisão.json',
          'META 9/Cirurgia Vascular Revisão/Cirurgia Vascular Revisão2.json',
          'META 9/Doença aterosclerótica coronariana Revisão/Doença aterosclerótica coronariana Revisão.json',
          'META 9/Doença aterosclerótica coronariana Revisão/Doença aterosclerótica coronariana Revisão2.json',
          'META 9/Doenças benignas da mama/Doenças benignas da mama.json',
          'META 9/Hemorragia digestiva/Hemorragia digestiva.json',
          'META 9/Hemorragia pós parto e infecção puerperal/Hemorragia pós parto e infecção puerperal.json',
          'META 9/Hemorragia pós parto e infecção puerperal/Hemorragia pós parto e infecção puerperal2.json',
          'META 9/IVAS II/IVAS II.json',
          'META 9/Lesão renal aguda/Lesão renal aguda.json',
          'META 9/Neoplasias pulmonares/Neoplasias pulmonares.json',
          'META 9/Nutrição infantil Revisão/Nutrição infantil Revisão.json',
          'META 9/Nutrição infantil Revisão/Nutrição infantil Revisão2.json',
          'META 9/Outras hepatopatias/Outras hepatopatias.json',
          'META 9/Pneumonias/Pneumonias.json',
          'META 9/Pneumonias2/Pneumonias.json',
          'META 9/Pneumonias2/Pneumonias2.json',
          'META 9/Proc Desc E Reg SUS Financiamento em saúd/Proc Desc E Reg SUS Financiamento em saúd.json',
          'META 9/Proc Desc E Reg SUS Financiamento em saúd/Proc Desc E Reg SUS Financiamento em saúd2.json',
          'META 9/Revisão por questões Obstetrícia Meta 9/Revisão por questões Obstetrícia Meta 9.json',
          'META 9/Revisão por questões Obstetrícia Meta 9/Revisão por questões Obstetrícia Meta 92.json',
          'META 9/Revisão por questões Pediatria/Revisão por questões Pediatria.json',
          'META 9/Revisão por questões Pediatria/Revisão por questões Pediatria2.json',
          'META 9/Saúde do Trabalhador/Saúde do Trabalhador.json'
        ]
      },
      {
        meta: "META 10",
        metaPdf: "META 10/Meta 10 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Dermatoses infecciosas/',
          'DNPM Revisão',
          'DNPM Teoria',
          'Doenças benignas da mama Revisão',
          'Doenças exantemáticas',
          'Glaucoma e Uveíte',
          'Hemorragia digestiva Revisão',
          'Hipotireoidismo',
          'HIV Revisão',
          'HIV Teoria',
          'Intoxicações exógenas',
          'Medidas de Saúde Coletiva I',
          'Queimaduras e trauma elétrico',
          'Queimaduras e trauma elétrico Revisão',
          'Rastreamento do câncer de mama',
          'Revisão por questões Cirurgia Meta 10',
          'Revisão por Questões Infectologia Meta 10',
          'Sangramento da segunda metade',
          'Saúde do Trabalhador Revisão',
          'Síndromes dolorosas'
        ],
        listFiles: [
          'META 10/Dermatoses infecciosas/Dermatoses infecciosas.json',
          'META 10/DNPM Revisão/DNPM Revisão.json',
          'META 10/DNPM Revisão/DNPM Revisão2.json',
          'META 10/DNPM Teoria/DNPM Teoria.json',
          'META 10/Doenças benignas da mama Revisão/Doenças benignas da mama Revisão.json',
          'META 10/Doenças benignas da mama Revisão/Doenças benignas da mama Revisão2.json',
          'META 10/Doenças exantemáticas/Doenças exantemáticas.json',
          'META 10/Glaucoma e Uveíte/Glaucoma e Uveíte.json',
          'META 10/Hemorragia digestiva Revisão/Hemorragia digestiva Revisão.json',
          'META 10/Hemorragia digestiva Revisão/Hemorragia digestiva Revisão2.json',
          'META 10/Hipotireoidismo/Hipotireoidismo.json',
          'META 10/HIV Revisão/HIV Revisão.json',
          'META 10/HIV Revisão/HIV Revisão2.json',
          'META 10/HIV Teoria/HIV Teoria.json',
          'META 10/Intoxicações exógenas/Intoxicações exógenas.json',
          'META 10/Medidas de Saúde Coletiva I/Medidas de Saúde Coletiva I.json',
          'META 10/Queimaduras e trauma elétrico/Queimaduras e trauma elétrico.json',
          'META 10/Queimaduras e trauma elétrico/Queimaduras e trauma elétrico2.json',
          'META 10/Queimaduras e trauma elétrico Revisão/Queimaduras e trauma elétrico Revisão.json',
          'META 10/Queimaduras e trauma elétrico Revisão/Queimaduras e trauma elétrico Revisão2.json',
          'META 10/Rastreamento do câncer de mama/Rastreamento do câncer de mama.json',
          'META 10/Rastreamento do câncer de mama/Rastreamento do câncer de mama2.json',
          'META 10/Revisão por questões Cirurgia Meta 10/Revisão por questões Cirurgia Meta 10.json',
          'META 10/Revisão por questões Cirurgia Meta 10/Revisão por questões Cirurgia Meta 102.json',
          'META 10/Revisão por Questões Infectologia Meta 10/Revisão por Questões Infectologia Meta 10.json',
          'META 10/Revisão por Questões Infectologia Meta 10/Revisão por Questões Infectologia Meta 102.json',
          'META 10/Sangramento da segunda metade/Sangramento da segunda metade.json',
          'META 10/Saúde do Trabalhador Revisão/Saúde do Trabalhador Revisão.json',
          'META 10/Saúde do Trabalhador Revisão/Saúde do Trabalhador Revisão2.json',
          'META 10/Síndromes dolorosas/Síndromes dolorosas.json'
        ]
      },
      {
        meta: "META 11",
        metaPdf: "META 11/Meta 11 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Apendicite aguda/',
          'Apendicite Aguda Revisão',
          'Coma e alterações da consciência',
          'Complicações da cirrose',
          'Câncer colorretal',
          'Diabetes na gestação',
          'Doenças exantemáticas Revisão',
          'Hemostasia e medicina transfusional',
          'IVAS III',
          'Medidas de saúde coletiva II',
          'Medidas de Saúde Coletiva Revisão',
          'Piodermites',
          'Piodermites Revisão',
          'Rastreamento do câncer de mama Revisão',
          'Revisão por questões Preventiva Meta 11',
          'Sangramento da segunda metade Revisão',
          'Valvopatias'
        ],
        listFiles: [
          'META 11/Apendicite aguda/Apendicite aguda.json',
          'META 11/Apendicite Aguda Revisão/Apendicite Aguda Revisão.json',
          'META 11/Apendicite Aguda Revisão/Apendicite Aguda Revisão2.json',
          'META 11/Coma e alterações da consciência/Coma e alterações da consciência.json',
          'META 11/Complicações da cirrose/Complicações da cirrose.json',
          'META 11/Câncer colorretal/Câncer colorretal.json',
          'META 11/Diabetes na gestação/Diabetes na gestação.json',
          'META 11/Diabetes na gestação/Diabetes na gestação2.json',
          'META 11/Doenças exantemáticas Revisão/Doenças exantemáticas Revisão.json',
          'META 11/Doenças exantemáticas Revisão/Doenças exantemáticas Revisão2.json',
          'META 11/Hemostasia e medicina transfusional/Hemostasia e medicina transfusional.json',
          'META 11/IVAS III/IVAS III.json',
          'META 11/Medidas de saúde coletiva II/Medidas de saúde coletiva II.json',
          'META 11/Medidas de saúde coletiva II/Medidas de saúde coletiva II2.json',
          'META 11/Medidas de Saúde Coletiva Revisão/Medidas de Saúde Coletiva Revisão.json',
          'META 11/Medidas de Saúde Coletiva Revisão/Medidas de Saúde Coletiva Revisão2.json',
          'META 11/Piodermites/Piodermites.json',
          'META 11/Piodermites Revisão/Piodermites Revisão.json',
          'META 11/Piodermites Revisão/Piodermites Revisão2.json',
          'META 11/Rastreamento do câncer de mama Revisão/Rastreamento do câncer de mama Revisão.json',
          'META 11/Rastreamento do câncer de mama Revisão/Rastreamento do câncer de mama Revisão2.json',
          'META 11/Revisão por questões Preventiva Meta 11/Revisão por questões Preventiva Meta 11.json',
          'META 11/Revisão por questões Preventiva Meta 11/Revisão por questões Preventiva Meta 112.json',
          'META 11/Sangramento da segunda metade Revisão/Sangramento da segunda metade Revisão.json',
          'META 11/Sangramento da segunda metade Revisão/Sangramento da segunda metade Revisão2.json',
          'META 11/Valvopatias/Valvopatias.json'
        ]
      },
      {
        meta: "META 12",
        metaPdf: "META 12/Meta 12 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Crescimento',
          'Crescimento e Puberdade Revisão',
          'Diabetes na gestação Revisão',
          'Doença renal crônica',
          'Hipotireoidismo Revisão',
          'Hérnias',
          'Hérnias Revisão',
          'Micoses invasivas Revisão',
          'Micoses Invasivas Teoria',
          'Polipose e neoplasias intestinais Revisão',
          'Processos epidêmicos',
          'Processos epidêmicos Revisão',
          'Puberdade',
          'Revisão por questões Pediatria Meta 12',
          'Sangramento uterino anormal',
          'Sangramento uterino anormal Revisão',
          'Síndromes Verrucosas Teoria',
          'TEP e Derrame Pleural'
        ],
        listFiles: [
          'META 12/Crescimento/crescimento.json',
          'META 12/Crescimento/crescimento2.json',
          'META 12/Crescimento e Puberdade Revisão/Crescimento e Puberdade Revisão.json',
          'META 12/Crescimento e Puberdade Revisão/Crescimento e Puberdade Revisão2.json',
          'META 12/Diabetes na gestação Revisão/Diabetes na gestação Revisão.json',
          'META 12/Diabetes na gestação Revisão/Diabetes na gestação Revisão2.json',
          'META 12/Doença renal crônica/Doença renal crônica.json',
          'META 12/Hipotireoidismo Revisão/Hipotireoidismo Revisão.json',
          'META 12/Hipotireoidismo Revisão/Hipotireoidismo Revisão2.json',
          'META 12/Hérnias/Hérnias.json',
          'META 12/Hérnias Revisão/Hérnias Revisão.json',
          'META 12/Hérnias Revisão/Hérnias Revisão2.json',
          'META 12/Micoses invasivas Revisão/Micoses invasivas Revisão.json',
          'META 12/Micoses Invasivas Teoria/Micoses Invasivas Teoria.json',
          'META 12/Polipose e neoplasias intestinais Revisão/Polipose e neoplasias intestinais Revisão.json',
          'META 12/Polipose e neoplasias intestinais Revisão/Polipose e neoplasias intestinais Revisão2.json',
          'META 12/Processos epidêmicos/Processos epidêmicos.json',
          'META 12/Processos epidêmicos Revisão/Processos epidêmicos Revisão.json',
          'META 12/Processos epidêmicos Revisão/Processos epidêmicos Revisão2.json',
          'META 12/Puberdade/Puberdade.json',
          'META 12/Revisão por questões Pediatria Meta 12/Revisão por questões Pediatria Meta 12.json',
          'META 12/Revisão por questões Pediatria Meta 12/Revisão por questões Pediatria Meta 122.json',
          'META 12/Sangramento uterino anormal/Sangramento uterino anormal.json',
          'META 12/Sangramento uterino anormal Revisão/Sangramento uterino anormal Revisão.json',
          'META 12/Sangramento uterino anormal Revisão/Sangramento uterino anormal Revisão2.json',
          'META 12/Síndromes Verrucosas Teoria/Síndromes Verrucosas Teoria.json',
          'META 12/TEP e Derrame Pleural/TEP e Derrame Pleural.json'
        ]
      },
      {
        meta: "META 13",
        metaPdf: "META 13/Meta 13 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Avaliação da vitalidade fetal',
          'Avaliação da vitalidade fetal Revisão',
          'COVID 19',
          'Covid 19 Revisão',
          'DRGE e Barret',
          'História do Sus e Políticas públicas',
          'Obesidade e síndrome metabólica',
          'Patologias orificiais',
          'Patologias Orificiais Revisão',
          'Políticas de Saúde Revisão',
          'Revisão Hepatologia',
          'Transtornos psicóticos',
          'Trauma torácico',
          'Tuberculose na infância',
          'Tuberculose na infância Revisão',
          'Tumores anexiais e Câncer de Ovário',
          'Valvopatias Revisão',
        ],
        listFiles: [
          'META 13/Avaliação da vitalidade fetal/Avaliação da vitalidade fetal.json',
          'META 13/Avaliação da vitalidade fetal Revisão/Avaliação da vitalidade fetal Revisão.json',
          'META 13/Avaliação da vitalidade fetal Revisão/Avaliação da vitalidade fetal Revisão2.json',
          'META 13/COVID 19/COVID 19.json',
          'META 13/Covid 19 Revisão/Covid 19 Revisão.json',
          'META 13/Covid 19 Revisão/Covid 19 Revisão2.json',
          'META 13/DRGE e Barret/DRGE e Barret.json',
          'META 13/História do Sus e Políticas públicas/História do Sus e Políticas públicas.json',
          'META 13/Obesidade e síndrome metabólica/Obesidade e síndrome metabólica.json',
          'META 13/Patologias orificiais/Patologias orificiais.json',
          'META 13/Patologias orificiais/Patologias orificiais2.json',
          'META 13/Patologias Orificiais Revisão/Patologias Orificiais Revisão.json',
          'META 13/Patologias Orificiais Revisão/Patologias Orificiais Revisão2.json',
          'META 13/Políticas de Saúde Revisão/Políticas de Saúde Revisão.json',
          'META 13/Políticas de Saúde Revisão/Políticas de Saúde Revisão2.json',
          'META 13/Revisão Hepatologia/Revisão Hepatologia.json',
          'META 13/Revisão Hepatologia/Revisão Hepatologia2.json',
          'META 13/Transtornos psicóticos/Transtornos psicóticos.json',
          'META 13/Trauma torácico/Trauma torácico.json',
          'META 13/Tuberculose na infância/Tuberculose na infância.json',
          'META 13/Tuberculose na infância Revisão/Tuberculose na infância Revisão.json',
          'META 13/Tuberculose na infância Revisão/Tuberculose na infância Revisão2.json',
          'META 13/Tumores anexiais e Câncer de Ovário/Tumores anexiais e Câncer de Ovário.json',
          'META 13/Tumores anexiais e Câncer de Ovário/Tumores anexiais e Câncer de Ovário2.json',
          'META 13/Valvopatias Revisão/Valvopatias Revisão.json',
          'META 13/Valvopatias Revisão/Valvopatias Revisão2.json'
        ]
      },
      {
        meta: "META 14",
        metaPdf: "META 14/Meta 14 - Mentoria Revalida 20231.pdf",
        listContent: [
          'Distúrbios do Movimento',
          'DRGE Revisão',
          'Infecções na gestação',
          'Insuficiência cardíaca',
          'Leptospirose e Malária',
          'Leptospirose e Malária Revisão',
          'Obesidade e síndrome metabólica Revisão',
          'Ortopedia e traumatologia Revisão',
          'Pesquisa Epidemiológica',
          'Pesquisas epidemiológicas Revisão',
          'Puericultura e hebiatria Revisão',
          'Revisão Cirurgia Meta 14',
          'Revisão Hematologia Meta 14',
          'Revisão por Questões Meta 14',
          'Tumores anexiais e ca ovário Revisão'
        ],
        listFiles: [
          'META 14/Distúrbios do Movimento/Distúrbios do Movimento.json',
          'META 14/DRGE Revisão/DRGE Revisão.json',
          'META 14/DRGE Revisão/DRGE Revisão2.json',
          'META 14/Infecções na gestação/Infecções na gestação.json',
          'META 14/Insuficiência cardíaca/Insuficiência cardíaca.json',
          'META 14/Leptospirose e Malária/Leptospirose e Malária.json',
          'META 14/Leptospirose e Malária Revisão/Leptospirose e Malária Revisão.json',
          'META 14/Leptospirose e Malária Revisão/Leptospirose e Malária Revisão2.json',
          'META 14/Obesidade e síndrome metabólica Revisão/Obesidade e síndrome metabólica Revisão.json',
          'META 14/Obesidade e síndrome metabólica Revisão/Obesidade e síndrome metabólica Revisão2.json',
          'META 14/Ortopedia e traumatologia Revisão/Ortopedia e traumatologia Revisão.json',
          'META 14/Ortopedia e traumatologia Revisão/Ortopedia e traumatologia Revisão2.json',
          'META 14/Pesquisa Epidemiológica/Pesquisa Epidemiológica.json',
          'META 14/Pesquisa Epidemiológica/Pesquisa Epidemiológica1.json',
          'META 14/Pesquisas epidemiológicas Revisão/Pesquisas epidemiológicas Revisão.json',
          'META 14/Pesquisas epidemiológicas Revisão/Pesquisas epidemiológicas Revisão2.json',
          'META 14/Puericultura e hebiatria Revisão/Puericultura e hebiatria Revisão.json',
          'META 14/Puericultura e hebiatria Revisão/Puericultura e hebiatria Revisão2.json',
          'META 14/Revisão Cirurgia Meta 14/Revisão Cirurgia Meta 14.json',
          'META 14/Revisão Cirurgia Meta 14/Revisão Cirurgia Meta 142.json',
          'META 14/Revisão Hematologia Meta 14/Revisão Hematologia Meta 14.json',
          'META 14/Revisão Hematologia Meta 14/Revisão Hematologia Meta 142.json',
          'META 14/Revisão por Questões Meta 14/Revisão por Questões Meta 14.json',
          'META 14/Revisão por Questões Meta 14/Revisão por Questões Meta 142.json',
          'META 14/Tumores anexiais e ca ovário Revisão/Tumores anexiais e ca ovário Revisão.json',
          'META 14/Tumores anexiais e ca ovário Revisão/Tumores anexiais e ca ovário Revisão2.json'
        ]
      },
    ]
  }
  ngOnInit(): void {

  }

  readFileContent(file: string): void {
    this.httpClient.get('../assets/json/' + file).subscribe((jsonData: any) => {
      this.questionsListData = jsonData.data;
      this.questionsListData.forEach(question => {

        let questionOptions: any[] = [];
        question.alternatives.forEach((alternative: any) => {
          let alternativeData: any = {
            correct: alternative.correct,
            text: alternative.sanitized_body,
            comment: alternative.solution.sanitized_complete
          };

          questionOptions.push(alternativeData);
        });

        const questionData = {
          title: question.topics[0]?.name,
          subtitle: question.topics[1]?.name,
          questionText: question.statement_text,
          options: questionOptions,
          solution: question.solution.sanitized_complete
        };

        this.selectedOptions.push(null);
        this.textCheckButtons.push("Verifique a resposta");
        this.questionsListFormatted.push(questionData);
      });

    });
  }

  showQuestionsList(meta: string, content: string, pos: number): void {
    const listContent: any[] = [];
    this.questionsListFormatted = [];
    this.jsonFiles.forEach(json => {
      json.listFiles.map((file: string) => {
        if (file.includes(content)) {
          listContent.push(file);
        }
      })
    });
    this.activeMeta = meta;
    this.activeContent = content;

    this.activeState[pos] = false;
    listContent.forEach(file => this.readFileContent(file));
  }

  consecutiveLetters(n: number): string {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letter = '';

    for (let i = 0; i <= n; i++) {
      letter = alphabet.charAt(n);
    }

    return letter;
  }

  checkAnswer(question: number): void {
    const optionQuestion = this.selectedOptions[question];
    this.activeQuestion = question;
    this.activeOptionQuestion = optionQuestion;
    if (optionQuestion) {
      if (optionQuestion.correct) {
        this.textCheckButtons[question] = "Respuesta Correcta";
      } else {
        this.textCheckButtons[question] = "Respuesta Incorrecta";
      }
    }
  }
}
