<?php

namespace App\Entity;

use App\Repository\CarRepository;
use Doctrine\DBAL\Types\Types;
use App\Entity\Category;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: CarRepository::class)]
class Car {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $brand = null;

    #[ORM\Column(length: 100)]
    private ?string $modele = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $year = null;

    #[ORM\Column(length: 20, unique: true)]
    private ?string $licensePlate = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $dailyPrice = null;

    #[ORM\Column(length: 50)]
    private ?string $status = 'Available';

    
    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'cars')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $category = null;


    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function setBrand(string $brand): void {
        $this->brand = $brand;
    }

    public function getBrand(): ?string {
        return $this->brand;
    }

    public function setModele(string $modele): void {
        $this->modele = $modele;
    }

    public function getModele(): ?string {
        return $this->modele;
    }

    public function setYear(int $year): void {
        $this->year = $year;
    }

    public function getYear(): ?int {
        return $this->year;
    }

    public function setLicensePlate(string $licensePlate): void {
        $this->licensePlate = $licensePlate;
    }

    public function getLicensePlate(): ?string {
        return $this->licensePlate;
    }

    public function setDailyPrice(int $dailyPrice): void {
        $this->dailyPrice = $dailyPrice;
    }

    public function getDailyPrice(): ?int {
        return $this->dailyPrice;
    }

    public function setStatus(string $status): void {
        $this->status = $status;
    }

    public function getStatus(): ?string {
        return $this->status;
    }

    public function setCategory(?Category $category): static {
        $this->category = $category;
        return $this;
    }    
    
    public function getCategory(): ?Category {
        return $this->category;
    }


}