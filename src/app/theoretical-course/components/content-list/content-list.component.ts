import { Component } from '@angular/core';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { UserData } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  user: UserData;

  specialties: any[] = [];
  selectedSpecialty: any;

  stateOptions: any[] = [];
  state: string;

  layout: string = 'list';

  dataList: any[] = [];
  dataListTemp: any[] = [];

  constructor(
    private accountService: AccountService
  ){
    this.accountService.user.subscribe(x => this.user = x);
    
    this.specialties = [
      {
        label: 'Cardiología'
      },
      {
        label: 'Cirugia'
      },
      {
        label: 'Dermatologia'
      },
      {
        label: 'Endocrinologia'
      },
      {
        label: 'Gastroenterologia'
      },
      {
        label: 'Ginecologia'
      },
      {
        label: 'Hematologia'
      },
      {
        label: 'Hepatología'
      },
      {
        label: 'Infectologia'
      },
      {
        label: 'Medicina Comunitaria'
      },
      {
        label: 'Medicina Interna'
      },
      {
        label: 'Medicina Preventiva'
      }
    ];
    this.stateOptions = [{ label: 'List', value: 'list', icon: 'pi pi-list' }, { label: 'Grid', value: 'grid', icon: 'pi pi-microsoft' }];
    this.state = 'list';

    this.dataList = [
      {
        id: '1',
        link: 'https://mega.nz/folder/mNBShDhK#J1h3tgewPiaDx94h7_fnQQ',
        name: 'Arritmias',
        description: 'Arritmias',
        image: 'arritmias.jpeg',
        category: 'Cardiología',
      },
      {
        id: '2',
        link: 'https://mega.nz/folder/2ExDEKaJ#Srx38ubnrDD7_ZtrOwO1Xw',
        name: 'Cardiomiopatias e Pericardiopatias',
        description: 'Cardiomiopatias e Pericardiopatias',
        image: 'cardiomiopatias.jpeg',
        category: 'Cardiología',
      },
      {
        id: '3',
        link: 'https://mega.nz/folder/jdZUwAza#OumdCOAWTmgwthehoI4rJQ',
        name: 'Doença Aterosclerótica Coronariana',
        description: 'Doença Aterosclerótica Coronariana',
        image: 'doenca-aterosclerotica-coronariana.jpeg',
        category: 'Cardiología',
      },
      {
        id: '4',
        link: 'https://mega.nz/folder/uFICzD4K#D6nUOuNvgOVXilMKMFHMtw',
        name: 'Eletrocardiografia Básica',
        description: 'Eletrocardiografia Básica',
        image: 'electrocardiografia-basica.jpeg',
        category: 'Cardiología',
      },
      {
        id: '5',
        link: 'https://mega.nz/folder/PRpyRbII#2nrGxrC0UGsuqdd7KAISAA',
        name: 'Hipertensão Arterial Sistêmica',
        description: 'Hipertensão Arterial Sistêmica',
        image: 'hipertensao-arterial-sistemica.jpeg',
        category: 'Cardiología',
      },
      {
        id: '6',
        link: 'https://mega.nz/folder/fAhnmKqJ#0EGZ2zcRXvYu4NvthVHWEQ',
        name: 'Insuficiência Cardíaca',
        description: 'Insuficiência Cardíaca',
        image: 'insuficiencia-cardiaca.jpeg',
        category: 'Cardiología',
      },
      {
        id: '7',
        link: 'https://mega.nz/folder/GQByWL7Q#Vcy-FsVDjoudglGz_S28jg',
        name: 'Parada Cardiorespiratória',
        description: 'Parada Cardiorespiratória',
        image: 'parada-cardiorespiratoria.jpeg',
        category: 'Cardiología',
      },
      {
        id: '8',
        link: 'https://mega.nz/folder/DVRk3YZS#PMYtGpVIeb-jz5b5CG3XfQ',
        name: 'Valvopatias',
        description: 'Valvopatias',
        image: 'valvopatias.jpeg',
        category: 'Cardiología',
      },
      {
        id: '9',
        link: 'https://mega.nz/folder/WE5DkLSB#CX_iLX9FKCnRu6f6V5msxg',
        name: 'AAI - Apendicite Aguda',
        description: 'AAI - Apendicite Aguda',
        image: 'apendicite-aguda.jpeg',
        category: 'Cirugia',
      },
      {
        id: '10',
        link: 'https://mega.nz/folder/TRgWgBaA#kDM5F9PAiGpmwTcfap5-ug',
        name: 'AAI - Colecistite Aguda',
        description: 'AAI - Colecistite Aguda',
        image: 'colecistite-aguda.jpeg',
        category: 'Cirugia',
      },
      {
        id: '11',
        link: 'https://mega.nz/folder/bRBykZAK#RjtII5It-fPzs99jbzhBgA',
        name: 'AAI - Diverticulite Aguda',
        description: 'AAI - Diverticulite Aguda',
        image: 'diverticulite-aguda.jpeg',
        category: 'Cirugia',
      },
      {
        id: '12',
        link: 'https://mega.nz/folder/nZQBxI5D#cKETBuKNfBlQ7Z-krs7TzQ',
        name: 'Abdome Agudo Hemorrágico',
        description: 'Abdome Agudo Hemorrágico',
        image: 'abdome-agudo-hemorragico.jpeg',
        category: 'Cirugia',
      },
      {
        id: '13',
        link: 'https://mega.nz/folder/TIh2Vaba#thcTw3GV0chFR83J0kXehg',
        name: 'Abdome Agudo Obstrutivo',
        description: 'Abdome Agudo Obstrutivo',
        image: 'abdome-agudo-obstrutivo.jpeg',
        category: 'Cirugia',
      },
      {
        id: '14',
        link: 'https://mega.nz/folder/KdRlSJ4A#EsXLpGP0GMrWhDzFeHGS1Q',
        name: 'Abdome Agudo Perfurativo',
        description: 'Abdome Agudo Perfurativo',
        image: 'abdome-agudo-perfurativo.jpeg',
        category: 'Cirugia',
      },
      {
        id: '15',
        link: 'https://mega.nz/folder/LEJRRZ4D#Rcq78XINpfoBY9T3piCNZg',
        name: 'Abdome Agudo Vascular',
        description: 'Abdome Agudo Vascular',
        image: 'abdome-agudo-vascular.jpeg',
        category: 'Cirugia',
      },
      {
        id: '16',
        link: 'https://mega.nz/folder/eV5QwLjT#vNpna6iDRoH1Q9oPrJ9GJg',
        name: 'Anestesiologia',
        description: 'Anestesiologia',
        image: 'anestesiologia.jpeg',
        category: 'Cirugia',
      },
      {
        id: '17',
        link: 'https://mega.nz/folder/jApUADCS#1mcdgdByKdDb-RqoDPqJ6Q',
        name: 'ATLS_ Atendimento Inicial e Via Aérea',
        description: 'ATLS_ Atendimento Inicial e Via Aérea',
        image: 'atendimento-inicial-via-aerea.jpeg',
        category: 'Cirugia',
      },
      {
        id: '17',
        link: 'https://mega.nz/folder/edxBSCzZ#iXpXWnkcydxwNtVHxTv4pw',
        name: 'Cicatrização de Feridas',
        description: 'Cicatrização de Feridas',
        image: 'cicatrizacao-feridas.jpeg',
        category: 'Cirugia',
      },
      {
        id: '18',
        link: 'https://mega.nz/folder/WQByxRZL#38JrK4oYqXTAgDV7K9p7Ww',
        name: 'Cirurgia Pediátrica',
        description: 'Cirurgia Pediátrica',
        image: 'cirurgia-pediatrica.jpeg',
        category: 'Cirugia',
      },
      {
        id: '19',
        link: 'https://mega.nz/folder/3dRThLBB#3e_odhBd3qw-39_sExd2Tw',
        name: 'Cirurgia Torácica',
        description: 'Cirurgia Torácica',
        image: 'cirurgia-toracica.jpeg',
        category: 'Cirugia',
      },
      {
        id: '20',
        link: 'https://mega.nz/folder/jMQnELpK#6Ng5ebOkGJ22CzYbOqd3Mg',
        name: 'Cirurgia Vascular',
        description: 'Cirurgia Vascular',
        image: 'cirurgia-vascular.jpeg',
        category: 'Cirugia',
      },
      {
        id: '21',
        link: 'https://mega.nz/folder/aZBUEA5Z#J3yyhOMiqkAced8_tQdDEQ',
        name: 'Colelitíase e Coledocolitíase',
        description: 'Colelitíase e Coledocolitíase',
        image: 'colelitiase-coledocolitiase.jpeg',
        category: 'Cirugia',
      },
      {
        id: '22',
        link: 'https://mega.nz/folder/fQ5QQCzK#ufDC0rEsm6cU315neM7ZAQ',
        name: 'Complicações Pós-Operatórias',
        description: 'Complicações Pós-Operatórias',
        image: 'complicacoes-pos-operatorias.jpeg',
        category: 'Cirugia',
      },
      {
        id: '23',
        link: 'https://mega.nz/folder/GEJDGYjb#LR8nN9RYhITApGx0OSFbnA',
        name: 'Ferimentos',
        description: 'Ferimentos',
        image: 'ferimentos.jpeg',
        category: 'Cirugia',
      },
      {
        id: '24',
        link: 'https://mega.nz/folder/vU4TyaBZ#OTj3a0RyWjLVcJgImW2l6g',
        name: 'Hérnias da Parede Abdominal',
        description: 'Hérnias da Parede Abdominal',
        image: 'hernias-parede-abdominal.jpeg',
        category: 'Cirugia',
      },
      {
        id: '25',
        link: 'https://mega.nz/folder/mBBAlYRC#PbeKsl0WgLJjQ1E9guadaA',
        name: 'Metabolismo e Nutrição em Cirurgia',
        description: 'Metabolismo e Nutrição em Cirurgia',
        image: 'metabolismo-nutricao-cirurgia.jpeg',
        category: 'Cirugia',
      },
      {
        id: '26',
        link: 'https://mega.nz/folder/3cZXRB4B#Vk6_yLGoAh6sMpzAT9brug',
        name: 'Patologias Orificiais',
        description: 'Patologias Orificiais',
        image: 'patologias-orificiais.jpeg',
        category: 'Cirugia',
      },
      {
        id: '27',
        link: 'https://mega.nz/folder/GEZFwLaS#QIclBBuJjkfMPqKsX5iCWQ',
        name: 'Queimaduras e Trauma Elétrico',
        description: 'Queimaduras e Trauma Elétrico',
        image: 'queimaduras-trauma-eletrico.jpeg',
        category: 'Cirugia',
      },
      {
        id: '28',
        link: 'https://mega.nz/folder/OQhBGayZ#DcGsc6E8OwqObvpkqE82uA',
        name: 'Temas Gerais em Cirurgia',
        description: 'Temas Gerais em Cirurgia',
        image: 'temas-gerais-cirurgia.jpeg',
        category: 'Cirugia',
      },
      {
        id: '29',
        link: 'https://mega.nz/folder/yAIEET5A#seEWqqsIURYWLjpJa9OQnw',
        name: 'Trauma',
        description: 'Trauma',
        image: 'trauma.jpeg',
        category: 'Cirugia',
      },
      {
        id: '30',
        link: 'https://mega.nz/folder/qAhGkbzL#SglHMyTkcAyYRzK1y8ebkw',
        name: 'Trauma Abdominal e Pélvico',
        description: 'Trauma Abdominal e Pélvico',
        image: 'trauma-abdominal-pelvico.jpeg',
        category: 'Cirugia',
      },
      {
        id: '31',
        link: 'https://mega.nz/folder/KAo0WKoC#dCT2n5iPjusk4Dri6-ZNJA',
        name: 'Trauma Cervical',
        description: 'Trauma Cervical',
        image: 'trauma-cervical.jpeg',
        category: 'Cirugia',
      },
      {
        id: '32',
        link: 'https://mega.nz/folder/KZw2VboB#UamE34BUDyMXX-Afri0Wzg',
        name: 'Trauma Populações Especiais',
        description: 'Trauma Populações Especiais',
        image: 'trauma-populacoes-especiais.jpeg',
        category: 'Cirugia',
      },
      {
        id: '33',
        link: 'https://mega.nz/folder/GUoywQoD#6_I3D8VQkqNrONbBu47W2g',
        name: 'Trauma Torácico',
        description: 'Trauma Torácico',
        image: 'trauma-toracico.jpeg',
        category: 'Cirugia',
      },
      {
        id: '34',
        link: 'https://mega.nz/folder/fVpgUYgR#O0CtmLw_IB4Vl3HqMKs8Lg',
        name: 'Trauma Vascular de Extremidades',
        description: 'Trauma Vascular de Extremidades',
        image: 'trauma-vascular-extremidades.jpeg',
        category: 'Cirugia',
      },
      {
        id: '35',
        link: 'https://mega.nz/folder/GBonjLCL#_mGPqV6IZR9wf6nU2DLJUw',
        name: 'Urologia',
        description: 'Urologia',
        image: 'urologia.jpeg',
        category: 'Cirugia',
      },
      {
        id: '36',
        link: 'https://mega.nz/folder/GA5wxRyD#nkL4fFmcLB8KeWaCD3soaA',
        name: 'Câncer de Pele',
        description: 'Câncer de Pele',
        image: 'cancer-pele.jpeg',
        category: 'Dermatologia',
      },
      {
        id: '37',
        link: 'https://mega.nz/folder/SJwg3DjT#tCm8otDGRvitzG_qXzqT0g',
        name: 'Dermatoses Infecciosas',
        description: 'Dermatoses Infecciosas',
        image: 'dermatoses-infecciosas.jpeg',
        category: 'Dermatologia',
      },
      {
        id: '38',
        link: 'https://mega.nz/folder/nB5wiK7Q#MpRPimcK1bd3U6p0uA15RA',
        name: 'Hanseníase',
        description: 'Hanseníase',
        image: 'hanseniase.jpeg',
        category: 'Dermatologia',
      },
      {
        id: '40',
        link: 'https://mega.nz/folder/yZgA2LDZ#c8Bb34FkVvo5rmmHc9LLaw',
        name: 'Adrenal - Distúrbios do Cortisol (Insuficiência Adrenal e Sínfrome de Cushing)',
        description: 'Adrenal - Distúrbios do Cortisol (Insuficiência Adrenal e Sínfrome de Cushing)',
        image: 'disturbios-cortisol.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '41',
        link: 'https://mega.nz/folder/CdhEAbrT#8js1zEQhI9uNkUe5Z9lrvA',
        name: 'Adrenal - Feocromocitoma, Hiperaldosteronismo Primário e Incidentaloma Adrenal',
        description: 'Adrenal - Feocromocitoma, Hiperaldosteronismo Primário e Incidentaloma Adrenal',
        image: 'feocromocitoma.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '42',
        link: 'https://mega.nz/folder/OMxS3TqA#c2vMliGhTS9_zN9vUKZzqg',
        name: 'Diabetes Mellitus – Complicações Agudas',
        description: 'Diabetes Mellitus – Complicações Agudas',
        image: 'complicaciones-agudas.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '43',
        link: 'https://mega.nz/folder/CEZ1zQ5R#9iSDHCOIA3UV3k7HV0UihA',
        name: 'Diabetes Mellitus – Complicações Crônicas',
        description: 'Diabetes Mellitus – Complicações Crônicas',
        image: 'complicacoes-cronicas.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '44',
        link: 'https://mega.nz/folder/yRJRBAwQ#yyohFRfOGlBMBLJKP-iKOg',
        name: 'Diabetes Mellitus – Insulinoterapia',
        description: 'Diabetes Mellitus – Insulinoterapia',
        image: 'insulinoterapia.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '45',
        link: 'https://mega.nz/folder/LdhVUBzC#hCWzbGFXvtpTvoGjAqalwA',
        name: 'Diabetes Mellitus Tipo II',
        description: 'Diabetes Mellitus Tipo II',
        image: 'diabetes-mellitus-II.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '46',
        link: 'https://mega.nz/folder/TMhDUQIT#dlc9l3DM6Erq7AREQLH97w',
        name: 'Diabetes Mellitus- Diagnóstico, Classificação e Metas de Controle Glicêmico',
        description: 'Diabetes Mellitus- Diagnóstico, Classificação e Metas de Controle Glicêmico',
        image: 'diabetes-mellitus-metas.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '47',
        link: 'https://mega.nz/folder/TFoTUIZC#AE9t5zr7n7pUza5NY3sfXQ',
        name: 'Hipófise - Acromegalia',
        description: 'Hipófise - Acromegalia',
        image: 'acromegalia.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '48',
        link: 'https://mega.nz/folder/GYhEgKjI#Ez0kCkexsmFW1fmtoav2YA',
        name: 'Hipófise - Hiperprolactinemia',
        description: 'Hipófise - Hiperprolactinemia',
        image: 'hiperprolactinemia.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '49',
        link: 'https://mega.nz/folder/yAACxC5I#A7YqDGZRdNptawPEcRRseA',
        name: 'Metabolismo Ósseo e Mineral - Distúrbios do Cálcio',
        description: 'Metabolismo Ósseo e Mineral - Distúrbios do Cálcio',
        image: 'disturbios-calcio.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '50',
        link: 'https://mega.nz/folder/7RJX2K7I#iHYWco1x7y8ModWYZc0KUw',
        name: 'Metabolismo Ósseo e Mineral - Osteoporose',
        description: 'Metabolismo Ósseo e Mineral - Osteoporose',
        image: 'osteoporose.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '51',
        link: 'https://mega.nz/folder/uVRhRR7I#rmlId3knrTI_Vz8JED31vA',
        name: 'Obesidade e Síndrome Metabólica',
        description: 'Obesidade e Síndrome Metabólica',
        image: 'obesidade.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '52',
        link: 'https://mega.nz/folder/mFQmVYJI#eN2BzSPPSB_Ie_qJqnJuoA',
        name: 'Tireoide - Fisiologia e Avaliação Diagnóstica',
        description: 'Tireoide - Fisiologia e Avaliação Diagnóstica',
        image: 'tireoide.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '53',
        link: 'https://mega.nz/folder/iAQlUJpR#Cbu4bhbsUvmggwio_zsHiw',
        name: 'Tireoide - Hipotireoidismo',
        description: 'Tireoide - Hipotireoidismo',
        image: 'tireoide-hipotireoidismo.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '54',
        link: 'https://mega.nz/folder/zMRHTSBa#YJU2eDbaD_36FGo3Wd5oiQ',
        name: 'Tireoide - Manejo dos Nódulos Tireoidianos, Câncer de Tireoide e Tireoidectomia',
        description: 'Tireoide - Manejo dos Nódulos Tireoidianos, Câncer de Tireoide e Tireoidectomia',
        image: 'tireoide-tireoidectomia.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '55',
        link: 'https://mega.nz/folder/HYwFBRya#ZMRy28-VPVWk35Sthr9KeA',
        name: 'Tireoide - Tireotoxicose',
        description: 'Tireoide - Tireotoxicose',
        image: 'tireoide-tireotoxicose.jpeg',
        category: 'Endocrinologia',
      },
      {
        id: '56',
        link: 'https://mega.nz/folder/GEZgDDBI#V8-97op9uABWZleWtHuo-A',
        name: 'Distúrbios Disabsortivos e Síndrome do Intestino Irritável',
        description: 'Distúrbios Disabsortivos e Síndrome do Intestino Irritável',
        image: 'sindrome-intestino-irritavel.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '57',
        link: 'https://mega.nz/folder/vY4AySCY#Z2ZwvvWmsDzFvkAGrXWC1A',
        name: 'Doença do Refluxo Gastroesofágico, Barrett e Outras Doenças do Esôfago',
        description: 'Doença do Refluxo Gastroesofágico, Barrett e Outras Doenças do Esôfago',
        image: 'doencas-esofago.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '58',
        link: 'https://mega.nz/folder/vJ5QVJBS#0Oi8umrEuphoYfcP_CrWTw',
        name: 'Doença Péptica e Dispepsia Funcional',
        description: 'Doença Péptica e Dispepsia Funcional',
        image: 'dispepsia-funcional.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '59',
        link: 'https://mega.nz/folder/WZwUmBDD#RpK9cN7atO1oTGrRg8gozg',
        name: 'Doenças Inflamatórias Intestinais',
        description: 'Doenças Inflamatórias Intestinais',
        image: 'inflamatorias-intestinais.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '60',
        link: 'https://mega.nz/folder/bQwHALIL#jS5eb2PhWyBIzhjDY1OPVg',
        name: 'Hemorragia Digestiva Alta',
        description: 'Hemorragia Digestiva Alta',
        image: 'hemorragia-digestiva-alta.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '61',
        link: 'https://mega.nz/folder/eJwEBbII#4VOpTh9RdwZYEvXJpcamkA',
        name: 'Neoplasias de Esôfago, Estômago e Pâncreas',
        description: 'Neoplasias de Esôfago, Estômago e Pâncreas',
        image: 'neoplasias-esofago.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '62',
        link: 'https://mega.nz/folder/jQgVXJob#tdgcqtllekqD27T7bIsZZw',
        name: 'Pancreatites',
        description: 'Pancreatites',
        image: 'pancreatites.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '63',
        link: 'https://mega.nz/folder/iAIV2ITJ#_8xIuCF7oshbM3V1wG7V2w',
        name: 'Pólipos e Neoplasias Intestinais',
        description: 'Pólipos e Neoplasias Intestinais',
        image: 'polipos-neoplasias.jpeg',
        category: 'Gastroenterologia',
      },
      {
        id: '64',
        link: 'https://mega.nz/folder/iAIV2ITJ#_8xIuCF7oshbM3V1wG7V2w',
        name: 'Amenorreia',
        description: 'Amenorreia',
        image: 'amenorreia.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '65',
        link: 'https://mega.nz/folder/yF5mxCSL#D5JN-cAreR35p9sV5vDfaA',
        name: 'Atendimento à Vítima de Violência Sexual',
        description: 'Atendimento à Vítima de Violência Sexual',
        image: 'violencia-sexual.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '66',
        link: 'https://mega.nz/folder/qEAzTDDb#SxJHw5waIFxtF058-v1ycA',
        name: 'Câncer de Mama',
        description: 'Câncer de Mama',
        image: 'cancer-mama.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '67',
        link: 'https://mega.nz/folder/HZIxFaqb#eSHxPp6UaU8oYWU9K4zwAw',
        name: 'Câncer do Endométrio e Pólipos',
        description: 'Câncer do Endométrio e Pólipos',
        image: 'cancer-endometrio.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '68',
        link: 'https://mega.nz/folder/HMBTEbRT#TeJkRcOV-_SuEpmeQVg8ww',
        name: 'Ciclo Menstrual',
        description: 'Ciclo Menstrual',
        image: 'ciclo-menstrual.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '69',
        link: 'https://mega.nz/folder/CJQgBQhJ#2lOOIt3Dv-MkaZQeTuAZMw',
        name: 'Climatério e Terapia Hormonal',
        description: 'Climatério e Terapia Hormonal',
        image: 'climaterio.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '70',
        link: 'https://mega.nz/folder/7MR2SB4T#LjE526ucmEJ8zuuYvY9l8A',
        name: 'Doença Inflamatória Pélvica e Cervicites',
        description: 'Doença Inflamatória Pélvica e Cervicites',
        image: 'doenca-inflamatoria.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '71',
        link: 'https://mega.nz/folder/6cIBlJoC#hrc7dFcuGoEPiBVyJ7hcFA',
        name: 'Doenças Benignas da Mama',
        description: 'Doenças Benignas da Mama',
        image: 'doencas-benignas-mama.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '72',
        link: 'https://mega.nz/folder/eQIACDgJ#dfXRCJmWih7Z-sGhDMkWCA',
        name: 'Endometriose',
        description: 'Endometriose',
        image: 'endometriose.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '73',
        link: 'https://mega.nz/folder/CFhUgDxY#6A-ZAqw3pRMPiyS8yOBMLw',
        name: 'Ginecologia Miscelânea',
        description: 'Ginecologia Miscelânea',
        image: 'ginecologia-miscelanea.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '74',
        link: 'https://mega.nz/folder/6ZwmwLDK#3GFtDkfwp2VgwHvM_OnvwA',
        name: 'Incontinência Urinária',
        description: 'Incontinência Urinária',
        image: 'incontinencia-urinaria.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '75',
        link: 'https://mega.nz/folder/DMx2EAAI#AmkPLyDTGOUSST0Ju1u1vQ',
        name: 'Infertilidade Conjugal',
        description: 'Infertilidade Conjugal',
        image: 'infertilidade-conjugal.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '76',
        link: 'https://mega.nz/folder/KBonSJpQ#1SgVTs6AIaiEGgU1QJsgGw',
        name: 'Miomatose Uterina',
        description: 'Miomatose Uterina',
        image: 'miomatose-uterina.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '77',
        link: 'https://mega.nz/folder/zFwUCCzB#QdwUv4r3lmT-mhzEDl4ffg',
        name: 'Planejamento Familiar',
        description: 'Planejamento Familiar',
        image: 'planejamento-familiar.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '78',
        link: 'https://mega.nz/folder/GIg1hDgI#vzVXM__l-fPA7ubafnzmug',
        name: 'Rastreamento do Câncer de Colo Uterino',
        description: 'Rastreamento do Câncer de Colo Uterino',
        image: 'cancer-colo-uterino.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '79',
        link: 'https://mega.nz/folder/eNhwHJCQ#DeOpXJtD63Ss1_aoJIco3w',
        name: 'Rastreamento do Câncer de Mama',
        description: 'Rastreamento do Câncer de Mama',
        image: 'rastreamento-cancer-mama.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '80',
        link: 'https://mega.nz/folder/HAwVAJBK#045NIwgHqx-FiMfe-cH7ew',
        name: 'Sangramento Uterino Anormal (SUA)',
        description: 'Sangramento Uterino Anormal (SUA)',
        image: 'sangramento-uterino-anormal.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '81',
        link: 'https://mega.nz/folder/2RZkEJgI#iuitk9VccbiapqL91JypwQ',
        name: 'Síndrome dos Ovários Policísticos',
        description: 'Síndrome dos Ovários Policísticos',
        image: 'ovarios-policisticos.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '82',
        link: 'https://mega.nz/folder/vIxVAQZT#KGIC0sZCsdOX2CRlLMbIhA',
        name: 'Tumores Anexiais',
        description: 'Tumores Anexiais',
        image: 'tumores-anexiais.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '83',
        link: 'https://mega.nz/folder/jFhnSJha#3JrLwayy4kbFUjtKuunaIw',
        name: 'Úlceras Genitais',
        description: 'Úlceras Genitais',
        image: 'ulceras-genitais.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '84',
        link: 'https://mega.nz/folder/GI4QCDoB#x_tPV6W1qCB376FhktnfdQ',
        name: 'Vulvovaginites',
        description: 'Vulvovaginites',
        image: 'vulvovaginites.jpeg',
        category: 'Ginecologia',
      },
      {
        id: '85',
        link: 'https://mega.nz/folder/Hd4UCITR#IGSHcDcHWLsbxqHQ9PmbQA',
        name: 'Anemias Hemolíticas',
        description: 'Anemias Hemolíticas',
        image: 'anemias-hemoliticas.jpeg',
        category: 'Hematologia',
      },
      {
        id: '86',
        link: 'https://mega.nz/folder/PRx3GADT#m_BpAK01xMXq-iUpeeeQZA',
        name: 'Anemias Microcíticas, Normocíticas e Macrocíticas',
        description: 'Anemias Microcíticas, Normocíticas e Macrocíticas',
        image: 'anemias-microciticas.jpeg',
        category: 'Hematologia',
      },
      {
        id: '87',
        link: 'https://mega.nz/folder/vUZw3b5K#qmpNLZ6Tj2Ogm9oPnk0bRA',
        name: 'Medicina Transfusional',
        description: 'Medicina Transfusional',
        image: 'medicina-transfusional.jpeg',
        category: 'Hematologia',
      },
      {
        id: '88',
        link: 'https://mega.nz/folder/yQhW3DzT#q8d5C00wb3rT8dnqQCmd_Q',
        name: 'Onco-Hematologia',
        description: 'Onco-Hematologia',
        image: 'onco-hematologia.jpeg',
        category: 'Hematologia',
      },
      {
        id: '89',
        link: 'https://mega.nz/folder/yMgVxD5D#W8rCc5fompxpSayG4lGRpw',
        name: 'Cirrose Hepática e Transplante Hepático',
        description: 'Cirrose Hepática e Transplante Hepático',
        image: 'cirrose-hepatica.jpeg',
        category: 'Hepatología',
      },
      {
        id: '90',
        link: 'https://mega.nz/folder/6RIzTZzL#fIVd25IJKfxShsLyz3FN3w',
        name: 'Complicações da Cirrose',
        description: 'Complicações da Cirrose',
        image: 'complicacoes-cirrose.jpeg',
        category: 'Hepatología',
      },
      {
        id: '91',
        link: 'https://mega.nz/folder/KABThJYT#2BX1GLx7famR7Wo3BRTqYg',
        name: 'Hepatites Virais',
        description: 'Hepatites Virais',
        image: 'hepatites-virais.jpeg',
        category: 'Hepatología',
      },
      {
        id: '92',
        link: 'https://mega.nz/folder/aJYTyIxB#VfsJREU1wZKDlrv96f5wmA',
        name: 'Hepatopatias Autoimunes',
        description: 'Hepatopatias Autoimunes',
        image: 'hepatopatias-autoimunes.jpeg',
        category: 'Hepatología',
      },
      {
        id: '93',
        link: 'https://mega.nz/folder/CMY3UB5Z#Krp7ZT1Za7Hh_nWtFJWgBg',
        name: 'Outras Hepatopatias',
        description: 'Outras Hepatopatias',
        image: 'outras-hepatopatias.jpeg',
        category: 'Hepatología',
      },
      {
        id: '94',
        link: 'https://mega.nz/folder/adxXTLiR#trd4prptbeS8dmtP0pxZUQ',
        name: 'Tumores Hepáticos',
        description: 'Tumores Hepáticos',
        image: 'tumores-hepaticos.jpeg',
        category: 'Hepatología',
      },
      {
        id: '95',
        link: 'https://mega.nz/folder/uYpHiJYD#eXvobOErIRhwOW_cyLSL-w',
        name: 'Atenção Primária à Saúde',
        description: 'Atenção Primária à Saúde',
        image: 'atencao-primaria.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '96',
        link: 'https://mega.nz/folder/fcZnBTyT#RLYY7kUP-_MfHQcksDoHOg',
        name: 'Estatística Médica',
        description: 'Estatística Médica',
        image: 'estatistica-medica.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '97',
        link: 'https://mega.nz/folder/SYJVRJxT#76Y8-swbxMLQQvYbmCvw8A',
        name: 'Ética médica',
        description: 'Ética médica',
        image: 'etica-medica.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '98',
        link: 'https://mega.nz/folder/TIZUATBT#3I8_WtPo3s2xaZEltVEQ4g',
        name: 'Medicina de Família e Comunidade',
        description: 'Medicina de Família e Comunidade',
        image: 'medicina-familia-comunidade.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '99',
        link: 'https://mega.nz/folder/7Nw0VK6S#mqXj6qZHawBRdU-goOArpw',
        name: 'Medidas de Saúde Coletiva',
        description: 'Medidas de Saúde Coletiva',
        image: 'medidas-saude-coletiva.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '100',
        link: 'https://mega.nz/folder/iYoVASyY#Oqwsd7Jq6uKPdzROrcL7SQ',
        name: 'Pesquisa Epidemiológica',
        description: 'Pesquisa Epidemiológica',
        image: 'pesquisa-epidemiologica.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '101',
        link: 'https://mega.nz/folder/rV5REToJ#JxYrrlpI6uoDflXnY1jL8Q',
        name: 'Processo Saúde-Doença',
        description: 'Processo Saúde-Doença',
        image: 'processo-saude-doenca.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '102',
        link: 'https://mega.nz/folder/TII1lIaC#vTXv9uMtw1961u6w27UykA',
        name: 'Processos Epidêmicos e Epidemiologia das Doenças Infecciosas',
        description: 'Processos Epidêmicos e Epidemiologia das Doenças Infecciosas',
        image: 'processos-epidemicos.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '103',
        link: 'https://mega.nz/folder/6UZUhRLD#opsnNVOnHSKUkl-lcaA-4w',
        name: 'Saúde do Idoso',
        description: 'Saúde do Idoso',
        image: 'saude-idoso.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '104',
        link: 'https://mega.nz/folder/nIZHVDJQ#_z_RpbdiRrnzpS3Kx4HiIg',
        name: 'Saúde do Trabalhador',
        description: 'Saúde do Trabalhador',
        image: 'saude-trabalhador.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '105',
        link: 'https://mega.nz/folder/LcpV0RwR#9O6MHV0b7SSsNNLlyLy0sA',
        name: 'SUS - PARTE I Marcos Legais do SUS',
        description: 'SUS - PARTE I Marcos Legais do SUS',
        image: 'marcos-legais-SUS.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '106',
        link: 'https://mega.nz/folder/jMRkABpI#WyUp-PM9RDqLYy5s9g3lxg',
        name: 'SUS - PARTE II Princípios e Diretrizes do SUS',
        description: 'SUS - PARTE II Princípios e Diretrizes do SUS',
        image: 'diretrizes-SUS.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '107',
        link: 'https://mega.nz/folder/uQ4nxZKZ#DXtaQByd76qsLOEArAwMmw',
        name: 'SUS - PARTE III Processos de Descentralização e Regionalização do SUS + Financiamento',
        description: 'SUS - PARTE III Processos de Descentralização e Regionalização do SUS + Financiamento',
        image: 'processos-SUS.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '108',
        link: 'https://mega.nz/folder/GQ4VmZ5K#XZ7yhRgy4oQ_1a0UdemG_g',
        name: 'SUS - PARTE IV Miscelânea - História do SUS',
        description: 'SUS - PARTE IV Miscelânea - História do SUS',
        image: 'historia-sus.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '109',
        link: 'https://mega.nz/folder/CQIAzY4C#fUMmYkUBcFuWJNYtmA6qfA',
        name: 'Testes Diagnósticos',
        description: 'Testes Diagnósticos',
        image: 'testes-diagnosticos.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '110',
        link: 'https://mega.nz/folder/DAJRHbiK#1VibzE9ST0E-J5Sc4ou6iw',
        name: 'Vigilância em Saúde e Sistemas de Informações em Saúde',
        description: 'Vigilância em Saúde e Sistemas de Informações em Saúde',
        image: 'vigilancia-sus.jpeg',
        category: 'Medicina Preventiva',
      },
      {
        id: '111',
        link: 'https://mega.nz/folder/OMhz1LxS#Gu4a80VAdqgnQ7_wClEMVw',
        name: 'Etica médica',
        description: 'Etica médica',
        image: 'etica-medica1.jpeg',
        category: 'Medicina Comunitaria',
      },
    ];
    this.dataListTemp = [...this.dataList];
  }

  getSeverity(product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  changeSpecialty(event: any): void {
    if(event.value){
      this.dataListTemp = this.dataList.filter(p => p.category === event.value.label);
    } else {
      this.dataListTemp = [...this.dataList];
    }
    
  }

  changeStateOption(event: any): void {
    this.layout = event.value;
  }

  viewData(event: any, link): void {
    window.open(link, '_blank');
  }

}
