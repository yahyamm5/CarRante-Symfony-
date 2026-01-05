<?php

namespace App\Entity;

use App\Repository\CustomerRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
class Customer {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column]
    private ?int $telephone;


    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function getName(): ?string {
        return $this->name;
    }

    
    public function setFirstname(string $firstname): void {
        $this->firstname = $firstname;
    }

    public function getFirstname(): ?string {
        return $this->firstname;
    }

    
    public function setAddress(string $address): void {
        $this->address = $address;
    }

    public function getAddress(): ?string {
        return $this->address;
    }

    
    public function setEmail(string $email): void {
        $this->email = $email;
    }

    public function getEmail(): ?string {
        return $this->email;
    }

    public function setTelephone(int $telephone): static {
        $this->telephone = $telephone;
        return $this;
    }

    public function getTelephone(): ?int {
        return $this->telephone;
    }
}