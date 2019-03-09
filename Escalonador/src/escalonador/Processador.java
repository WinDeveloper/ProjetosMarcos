/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package escalonador;

/**
 *
 * @author MarcosB
 */
public class Processador {
    private Thread exe;
    private Processo atual;
    Runnable rodar=new Runnable() {
        @Override
        public void run() {
            int print=0;
            while(true){
                System.out.flush();
                try{
                    if((atual.getTempo()-1)>=0){
                        atual.setTempo(atual.getTempo()-1);
                        print=0;
                    }else{
                        if(print==0){
                            System.out.println(atual.getPid()+" Foi Encerrado Por Tempo");
                            print=1;
                        }
                    }
                }catch(Exception e){
                    
                }
            }
        }
    };

    public Processador() {
        exe=new Thread(rodar);
    }
    public void Rodar(){
        exe.start();
    }
    public void Parar(){
        exe.stop();
    }
    
    public Thread getExe() {
        return exe;
    }

    public void setExe(Thread exe) {
        this.exe = exe;
    }

    public Processo getAtual() {
        return atual;
    }

    public void setAtual(Processo atual) {
        this.atual = atual;
    }

    public Runnable getDecrementar() {
        return rodar;
    }

    public void setDecrementar(Runnable decrementar) {
        this.rodar = decrementar;
    }
    
}
