<?php


class EX_objeto {
    
    private $cod_EX;
    private $cod_EX2;
    private $propriedade1;
    private $propriedade1;
    
    public function __set($atributo, $valor) {
        $this->$atributo = $valor;
    }
    
    public function __get($atributo) {
        return $this->$atributo;
    }    
}
