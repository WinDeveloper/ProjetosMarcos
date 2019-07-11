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
public class Processo {
    private int pid;
    private int tempo;
    private int prioridade;
    private int idade=0;
    private int Tinicial;

 
    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int Processado) {
        this.idade = Processado;
    }
    
    public int getTinicial(){
        return Tinicial;
    }
    
    public Processo(int pid, int tempo, int prioridade) {
        this.pid = pid;
        this.tempo = tempo;
        this.prioridade = prioridade;
        this.Tinicial=tempo;
    }
    
}
