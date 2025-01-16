#include <iostream>
using namespace std;

bool isFibonacci(int num) {
    // Caso especial para 0
    if (num == 0) return true;
    
    // Inicializa os primeiros números da sequência
    int anterior = 0;
    int atual = 1;
    
    // Calcula a sequência até encontrar ou ultrapassar o número
    while (atual <= num) {
        if (atual == num) {
            return true;
        }
        
        // Calcula o próximo número da sequência
        int proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    
    return false;
}

void imprimirSequenciaAte(int num) {
    int anterior = 0;
    int atual = 1;
    
    cout << "Sequência de Fibonacci até " << num << ":" << endl;
    cout << anterior << " ";
    
    while (atual <= num) {
        cout << atual << " ";
        int proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    cout << endl;
}

int main() {
    int numero;
    
    cout << "Digite um número para verificar se pertence à sequência de Fibonacci: ";
    cin >> numero;
    
    // Imprime a sequência até o número informado
    imprimirSequenciaAte(numero);
    
    // Verifica se o número pertence à sequência
    if (isFibonacci(numero)) {
        cout << numero << " pertence à sequência de Fibonacci!" << endl;
    } else {
        cout << numero << " NÃO pertence à sequência de Fibonacci!" << endl;
    }
    
    return 0;
}