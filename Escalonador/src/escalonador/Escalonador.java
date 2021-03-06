/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package escalonador;

import java.util.LinkedList;
import java.util.Collections;
import java.util.Comparator;
/**
 *
 * @author MarcosB
 */
public class Escalonador {
   static Processador P1=new Processador();
   static LinkedList<Processo> Processos=new LinkedList<>();
   static LinkedList<Processo> Terminados=new LinkedList<>();
   //---------------------------------------------------------------------------
   static void UpdateList(){
        Collections.sort(Processos, new Comparator<Processo>() {
            @Override
            public int compare(Processo o1, Processo o2) {
                if(o1.getIdade()>o2.getIdade()){
                    return -1;
                }else
                    if(o1.getIdade()<o2.getIdade())
                        return 1;
                if((o1.getPrioridade()>o2.getPrioridade())){
                    if((o1.getTempo()>o2.getTempo()))
                        return -2;
                    return -1;
                }else
                    if((o1.getPrioridade()==o2.getPrioridade())||(o1.getTempo()==o2.getTempo())){
                        return 0;
                    }else
                        return 1;
            }
        });
    }
    public static void main(String[] args) throws InterruptedException {
        //Criando Lista de Processos A serem escalonados
            Processos.add(new Processo(1,20,1));
            Processos.add(new Processo(2,5,2));
            Processos.add(new Processo(3,20,1));
            Processos.add(new Processo(4,7,3));
            Processos.add(new Processo(5,10,2));
            Processos.add(new Processo(6,9,1));
            Processos.add(new Processo(7,11,5));
            Processos.add(new Processo(8,18,10));
            Processos.add(new Processo(9,18,9));
            Processos.add(new Processo(14, 100000, 90));
            Processos.add(new Processo(10,1800000,3));
        //---------------------------------------------
        //Ordenando A lista Baseada em Prioridade
        UpdateList();
        P1.Rodar();
        P1.getExe().setPriority(Thread.MIN_PRIORITY);
        while(true){
            if(Processos.getFirst().getTempo()<=1){
                //System.out.println("----------------------------");
//                Processos.getFirst().setTempo(Processos.getFirst().getTinicial());
//                Terminados.add(Processos.getFirst());
                Processos.removeFirst();
                if(Processos.isEmpty())
                    break;
            }
            
            P1.setAtual(Processos.getFirst());
            //System.out.println("Rodando PID:"+Processos.getFirst().getPid()+" Tempo Disponivel:"+Processos.getFirst().getTempo());
            Processo aux=Processos.getFirst();
            Processos.getFirst().setIdade(0);
            for(int i =1;i<Processos.size();i++){
                Processos.get(i).setIdade(Processos.get(i).getIdade()+1);
            }
//            System.out.println("------------------");
//            for(int i=0;i<Processos.size();i++){
//                System.out.println(Processos.get(i).getPid()+","+Processos.get(i).getIdade()+","+Processos.get(i).getPrioridade()+","+Processos.get(i).getTempo());
//            }
//            if(Processos.get(2).getTempo()<=1){
//                Processos.get(2).setTempo(Processos.get(2).getTinicial());
//            }
            
            Processos.add(aux);
            Processos.removeFirst();
// imprime os Processos terminados
            for(int i=0;i<Terminados.size();i++){
                System.out.println(Terminados.get(i).getPid()+","+Terminados.get(i).getIdade()+","+Terminados.get(i).getPrioridade()+","+Terminados.get(i).getTempo());
            }            
            UpdateList();
        }
        P1.Parar();
    }
}
