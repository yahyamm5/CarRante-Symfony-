<?php

namespace App\Entity;

use App\Repository\LeaseAgreementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Customer;
use App\Entity\Car;

#[ORM\Entity(repositoryClass: LeaseAgreementRepository::class)]
class LeaseAgreement {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $startDate = null;

    #[ORM\Column(length: 50)]
    private ?string $endDate = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $realReturnDate = null;

    #[ORM\Column]
    private ?int $totalPrice = null;

    #[ORM\Column(length: 50)]
    private ?string $status = 'pending';

    #[ORM\ManyToOne(targetEntity: Car::class)]
    #[ORM\JoinColumn]
    private ?Car $car = null;

    #[ORM\ManyToOne(targetEntity: Customer::class)]
    #[ORM\JoinColumn]
    private ?Customer $customer = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id) {
        $this->id = $id;
    }

    public function getStartDate(): ?string
    {
        return $this->startDate;
    }

    public function setStartDate(string $startDate): static
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getEndDate(): ?string
    {
        return $this->endDate;
    }

    public function setEndDate(string $endDate): static
    {
        $this->endDate = $endDate;
        return $this;
    }

    public function getRealReturnDate(): ?string
    {
        return $this->realReturnDate;
    }

    public function setRealReturnDate(?string $realReturnDate): static
    {
        $this->realReturnDate = $realReturnDate;
        return $this;
    }

    public function getTotalPrice(): ?int
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(int $totalPrice): static
    {
        $this->totalPrice = $totalPrice;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;
        return $this;
    }

    public function getCar(): ?Car
    {
        return $this->car;
    }

    public function setCar(?Car $car): static
    {
        $this->car = $car;
        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): static
    {
        $this->customer = $customer;
        return $this;
    }

}