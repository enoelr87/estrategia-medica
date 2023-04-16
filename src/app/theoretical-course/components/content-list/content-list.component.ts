import { Component } from '@angular/core';
import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  specialties: any[] = [];
  selectedSpecialty: any;

  stateOptions: any[] = [];
  state: string;

  layout: string = 'list';

  dataList: any[] = [];
  dataListTemp: any[] = [];

  constructor(){
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
